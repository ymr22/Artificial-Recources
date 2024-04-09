from django.contrib.auth import login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.models import User
from rest_framework import permissions, status, generics
from rest_framework import views
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from . import serializers
from rest_framework.permissions import IsAuthenticated, AllowAny

from .serializers import ChangePasswordSerializer


class LoginView(views.APIView):
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = serializers.LoginSerializer(data=self.request.data,
                                                 context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        user.save()
        login(request, user)
        request.session.set_expiry(123456789)
        print(request.user)
        return Response(None, status=status.HTTP_202_ACCEPTED)


class LogoutView(views.APIView):
    def post(self, request):
        logout(request)
        return Response(None, status=status.HTTP_204_NO_CONTENT)


class ProfileView(generics.RetrieveAPIView):
    serializer_class = serializers.UserSerializer

    def get_object(self):
        return self.request.user


class ChangePasswordView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ChangePasswordSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=request.user)  # Pass the authenticated user to the serializer
            return Response({"message": "Password changed successfully."})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # """
    # An endpoint for changing password.
    # """
    # permission_classes = (AllowAny,)
    #
    # def get_object(self, queryset=None):
    #     return self.request.user
    #
    # def put(self, request, *args, **kwargs):
    #     self.object = User.objects.get(username=request.user.username)
    #
    #     serializer = ChangePasswordSerializer(data=request.data)
    #
    #     if serializer.is_valid():
    #         # Check old password
    #         old_password = serializer.data.get("old_password")
    #         print(old_password)
    #         if not self.object.check_password(old_password):
    #             return Response({"old_password": ["Wrong password."]},
    #                             status=status.HTTP_400_BAD_REQUEST)
    #         # set_password also hashes the password that the user will get
    #         self.object.set_password(serializer.data.get("new_password"))
    #         self.object.save()
    #         return Response(status=status.HTTP_204_NO_CONTENT)
    #
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class ChangePasswordView(UpdateAPIView):
#     """
#     An endpoint for changing password.
#     """
#     serializer_class = ChangePasswordSerializer
#     model = User
#     permission_classes = (AllowAny,)
#
#     def get_object(self, queryset=None):
#         obj = self.request.user
#         return obj
#
#     def update(self, request, *args, **kwargs):
#         self.object = self.get_object()
#         serializer = self.get_serializer(data=request.data)
#
#         if serializer.is_valid():
#             # Check old password
#             if not self.object.check_password(serializer.data.get("old_password")):
#                 return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
#             # set_password also hashes the password that the user will get
#             self.object.set_password(serializer.data.get("new_password"))
#             self.object.save()
#             response = {
#                 'status': 'success',
#                 'code': status.HTTP_200_OK,
#                 'message': 'Password updated successfully',
#                 'data': []
#             }
#
#             return Response(response)
#
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

