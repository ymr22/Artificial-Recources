from .models import Employee
from rest_framework import routers, serializers, viewsets


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = "__all__"
