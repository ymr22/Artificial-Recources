from .models import Message, OffDayRequest
from rest_framework import serializers


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"


class OffDayRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = OffDayRequest
        fields = "__all__"
