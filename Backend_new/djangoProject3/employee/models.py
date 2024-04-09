from django.db import models


class Employee(models.Model):
    DEPARTMENT_CHOICES = [("backend", "Backend"), ("frontend", "Frontend"), ("admin", "Admin"),
                          ("humanResources", "Human Resources")]
    TITLES = [("cLevel", "C Level"), ("manager", "Manager"), ("engineer", "Engineer"), ("developer", "Developer"),
              ("employee", "Employee"), ("other", "Other")]
    employee_id = models.AutoField(primary_key=True, unique=True, auto_created=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
    department = models.CharField(choices=DEPARTMENT_CHOICES)
    work_duration = models.IntegerField(null=True, blank=True)
    phone = models.CharField(null=True, blank=True)
    is_supervisor = models.BooleanField(default=False)
    # title = models.CharField(choices=TITLES, null=True, blank=True)

    def __str__(self):
        return self.first_name + self.last_name
