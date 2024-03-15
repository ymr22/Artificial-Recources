from django.urls import path
from . import views

urlpatterns = [
    path('getall/', views.employee_list, name='employee_list'),
    path('create/', views.create_employee, name='employee_create'),
    path('getemployee/', views.get_employee, name='employee_get'),

]