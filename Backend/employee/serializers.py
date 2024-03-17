from rest_framework import serializers
from .models import Employee


# API View Practice
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"
