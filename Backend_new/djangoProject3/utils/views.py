import json

from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.shortcuts import render
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from employee.models import Employee
from rest_framework.permissions import AllowAny

from .models import CVInfo, OffDayRequest
from .serializers import CVSerializer, OffDayRequestSerializer
from vertex_ai.app import cv_model_predict, offDay_model_predict
from rest_framework.response import Response
from ai.app import generate_answer


@api_view(['GET'])
def cv_scan(request):
    requests = CVInfo.objects.all()

    serializer = CVSerializer(requests, many=True)

    combined_data = serializer.data

    ai_response = []

    for data in combined_data:
        response = cv_model_predict(data)
        ai_response.append(response)
    print(ai_response)
    return Response(ai_response)

@api_view(['GET'])
def cv_info(request):
    requests = CVInfo.objects.all()
    serializer = CVSerializer(requests, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def off_day(request):
    employee = Employee.objects.get(employee_id=8)
    requests = OffDayRequest.objects.filter(requested_by=employee)

    used_days = 12
    for request in requests:
        if request.approved is True:
            used_days += request.duration
        if request.timestamp < timezone.now():
            request.timeout = False
            request.save()
    curr = requests.filter(seen__exact=False, timeout__exact=False).last()

    curr_serializer = OffDayRequestSerializer(curr, many=False)

    ai_response = offDay_model_predict(curr_serializer.data, used_days)
    print(ai_response)
    return Response(ai_response)

@api_view(['GET'])
def off_day_requests(request):
    employee = Employee.objects.get(employee_id=8)
    requests = OffDayRequest.objects.filter(requested_by=employee)

    used_days = 12
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

@api_view(['POST'])
def cv_commit(request):
    serializer = CVSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers={'X-CSRFToken': get_csrf_token(request)})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST, headers={'X-CSRFToken': get_csrf_token(request)})

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})
