from django.contrib import admin
from .models import Message, OffDayRequest, CVInfo

admin.site.register(Message)
admin.site.register(OffDayRequest)
admin.site.register(CVInfo)
