from django import forms
from utils.models import OffDayRequest


class OffDayRequestForm(forms.ModelForm):
    class Meta:
        model = OffDayRequest
        fields = "__all__"

