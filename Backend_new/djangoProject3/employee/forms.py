from django import forms
from .models import Employee


class EntryForm(forms.ModelForm):

    class Meta:
        model = Employee
        fields = "__all__"
