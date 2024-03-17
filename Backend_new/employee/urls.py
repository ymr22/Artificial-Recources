from django.urls import path
from . import views

urlpatterns = [
    path('getall/', views.employee_list, name='employee_list'),
    path('getemployee/<int:pk>', views.get_employee, name='employee_get'),
    path('dashboard/<int:pk>', views.dash_employee, name='employee_dash'),
    path('dayoff/<int:pk>', views.get_employee_off_day_requests, name='employee_day_off'),
]