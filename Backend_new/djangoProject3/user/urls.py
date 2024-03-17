from django.contrib import admin
from django.urls import path

from user import views

urlpatterns = [
    path('login/', views.LoginView.as_view()),
    path('logout/', views.LogoutView.as_view()),
    path('profile/', views.ProfileView.as_view()),
]