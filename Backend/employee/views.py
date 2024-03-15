from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import EmployeeSerializer
from .models import Employee


@api_view(['GET'])
def employee_list(request):
    queryset = Employee.objects.all()
    serializer = EmployeeSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_employee(request):
    queryset = Employee.objects.get(user=request.user)
    serializer = EmployeeSerializer(queryset, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def create_employee(request):
    serializer = EmployeeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

