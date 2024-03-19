from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test, name='ai_test'),
]