from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from taskmanager.models import Task
from .serializers import TaskSerializer


class TaskManagerAPIView(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer