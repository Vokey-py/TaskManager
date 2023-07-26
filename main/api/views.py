from django.shortcuts import render

# Create your views here.
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .permissions import IsOwnerTask

from taskmanager.models import Task
from .serializers import TaskSerializer

class TaskManagerViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsOwnerTask, IsAuthenticated]
    def get_queryset(self):
        # Вернуть только те записи, которые принадлежат текущему пользователю.
        queryset = Task.objects.filter(user=self.request.user)
        return queryset