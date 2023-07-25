from django.shortcuts import render

# Create your views here.
from rest_framework import generics, viewsets
from taskmanager.models import Task
from .serializers import TaskSerializer


class TaskManagerViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer