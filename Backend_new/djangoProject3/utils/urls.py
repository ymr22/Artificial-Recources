from django.urls import path
from . import views

urlpatterns = [
    path('cvinfo/', views.cv_info, name='cv_info'),
    path('cvscan/', views.cv_scan, name='cv_scan'),
    path('offday/', views.off_day, name='off_day'),
]