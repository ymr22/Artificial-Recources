from django.contrib import admin
from .models import Message, OffDayRequest

admin.site.register(Message)
admin.site.register(OffDayRequest)
