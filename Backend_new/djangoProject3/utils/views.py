from django.shortcuts import render
from django.utils import timezone
from rest_framework.decorators import api_view
from employee.models import Employee
from .models import CVInfo, OffDayRequest
from .serializers import CVSerializer, OffDayRequestSerializer
from vertex_ai.app import cv_model_predict, offDay_model_predict
from rest_framework.response import Response


@api_view(['GET'])
def cv_scan(request):
    requests = CVInfo.objects.get(id=1)

    serializer = CVSerializer(requests, many=False)

    combined_data = serializer.data

    ai_response = cv_model_predict(combined_data)
    print(ai_response)
    return Response(ai_response)

@api_view(['GET'])
def cv_info(request):
    requests = CVInfo.objects.all()
    serializer = CVSerializer(requests, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def off_day(request):
    employee = Employee.objects.get(employee_id=2)
    requests = OffDayRequest.objects.filter(requested_by=employee)

    used_days = 0
    for request in requests:
        if request.approved is True:
            used_days += request.duration
        if request.timestamp < timezone.now():
            request.timeout = False
            request.save()
    curr = requests.filter(seen__exact=False, timeout__exact=False).last()

    curr_serializer = OffDayRequestSerializer(curr, many=False)

    combined_data = {
        'used_off_days': used_days,
        'current_request': curr_serializer.data,
    }

    ai_response = offDay_model_predict(curr_serializer.data, used_days)
    print(ai_response)
    return Response(ai_response)

@api_view(['GET'])
def off_day_requests(request):
    employee = Employee.objects.get(employee_id=2)
    requests = OffDayRequest.objects.filter(requested_by=employee)

    used_days = 0
    for request in requests:
        if request.approved is True:
            used_days += request.duration
        if request.timestamp < timezone.now():
            request.timeout = False
            request.save()
    curr = requests.filter(seen__exact=False, timeout__exact=False).last()

    curr_serializer = OffDayRequestSerializer(curr, many=False)

    combined_data = {
        'used_off_days': used_days,
        'current_request': curr_serializer.data,
    }

    return Response(combined_data)

