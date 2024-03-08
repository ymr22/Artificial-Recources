from django.contrib import admin

from employee.models import Employee
from company.models import Company
# from utils.models import CV
from job.models import Job


admin.site.register(Employee)
admin.site.register(Company)
admin.site.register(Job)

# Register your models here.
