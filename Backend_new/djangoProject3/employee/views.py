from django.shortcuts import render
from django.utils import timezone
from django.views.decorators import csrf
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from utils.models import Message, OffDayRequest
from .serializers import EmployeeSerializer
from utils.serializers import MessageSerializer, OffDayRequestSerializer
from .models import Employee
from ai.app import generate_answer as ai_query


@api_view(['GET'])
@csrf.csrf_exempt
def employee_list(request):
    queryset = Employee.objects.all()
    serializer = EmployeeSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_employee(request, pk):
    queryset = Employee.objects.get(employee_id=pk)
    serializer = EmployeeSerializer(queryset, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def dash_employee(request, pk):
    employee = Employee.objects.get(employee_id=pk)
    employee_serializer = EmployeeSerializer(employee, many=False)
    team = Employee.objects.filter(department__iexact=employee.department).exclude(employee_id=employee.employee_id)
    team_serializer = EmployeeSerializer(team, many=True)
    messages = Message.objects.filter(to_user__employee_id=employee.employee_id, is_deleted=False)
    message_serializer = MessageSerializer(messages, many=True)
    combined_data = {
        'employee': employee_serializer.data,
        'team_members': team_serializer.data,
        'messages': message_serializer.data
    }

    return Response(combined_data)


@api_view(['GET'])
def get_employee_off_day_requests(request, pk):
    employee = Employee.objects.get(employee_id=pk)
    requests = OffDayRequest.objects.filter(requested_by=employee)

    used_days = 0
    for request in requests:
        if request.approved is True:
            used_days += request.duration
        if request.timestamp < timezone.now():
            request.timeout = False
            request.save()
    curr = requests.filter(seen__exact=False, timeout__exact=False).last()

    prev_serializer = OffDayRequestSerializer(requests, many=True)
    curr_serializer = OffDayRequestSerializer(curr, many=False)

    combined_data = {
        'used_off_days': used_days,
        'prev_requests': prev_serializer.data,
        'current_request': curr_serializer.data,
    }



    ai_response = ai_query("I have used " + str(used_days) + " of holidays from my available " + str(curr.allowed_off_days) +
                           " days and I want am putting a new off-day request with the reason " + curr.reason + ". Do you approve?")
    print(ai_response)
    return Response(combined_data)

