from django.contrib import admin

from employee.models import Employee
from company.models import Company

admin.site.register(Employee)
admin.site.register(Company)

# Register your models here.
