"""
URL configuration for djangoProject3 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
import employee.urls as employee_urls
import user.urls as user_urls
import vertex_ai.urls as vertex_urls
import utils.urls as util_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include(user_urls)),
    path('employee/', include(employee_urls)),
    path('vertex/', include(vertex_urls)),
    path('utils/', include(util_urls)),
]
