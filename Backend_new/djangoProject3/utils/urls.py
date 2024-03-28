from django.urls import path
from . import views

urlpatterns = [
    path('cvinfo/', views.cv_info, name='cv_info'),
    path('cvscan/', views.cv_scan, name='cv_scan'),
    path('cvcommit/', views.cv_commit, name='cv_commit'),
    path('offday/', views.off_day, name='off_day'),
    path('offdayreq/', views.off_day_requests, name='off_day_requests'),
    path('csrftoken/', views.get_csrf_token, name='csrf'),
]