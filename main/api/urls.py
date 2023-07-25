from django.urls import path
from api.views import TaskManagerAPIView

urlpatterns = [
    path('api/TaskManagerAPIView/', TaskManagerAPIView.as_view()),
]