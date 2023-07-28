from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwnerTask
from taskmanager.models import Task
from .serializers import TaskSerializer


class BaseTaskAPIView(generics.GenericAPIView):
    serializer_class = TaskSerializer
    permission_classes = (IsOwnerTask, IsAuthenticated,)

    def get_queryset(self):  # Вернуть только те записи, которые принадлежат текущему пользователю.
        queryset = Task.objects.filter(user=self.request.user)
        return queryset


class TasksUserAPIview(BaseTaskAPIView, generics.ListAPIView):  # /api/tasks/
    pass


class TasksCreateAPIview(BaseTaskAPIView, generics.CreateAPIView):  # /api/tasks/create
    pass


class DetailTaskAPIview(BaseTaskAPIView, generics.RetrieveAPIView):  # /api/tasks/1/
    pass


class UpdateTaskAPIview(BaseTaskAPIView, generics.RetrieveUpdateAPIView):  # /api/tasks/1/update/
    pass


class DeleteTaskAPIview(BaseTaskAPIView, generics.RetrieveDestroyAPIView):  # /api/tasks/1/delete/
    pass


