from .models import Message, OffDayRequest, CVInfo
from rest_framework import serializers


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"


class OffDayRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = OffDayRequest
        fields = "__all__"


class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = CVInfo
        fields = "__all__"
