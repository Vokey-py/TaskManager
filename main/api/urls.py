from django.urls import path, include, re_path
from .views import *

urlpatterns = [

    path('tasks/', TasksUserAPIview.as_view(), name='api_tasks'),
    path('tasks/create', TasksCreateAPIview.as_view(), name='api_tasks_create'),
    path('tasks/<int:pk>', DetailTaskAPIview.as_view(), name='api_tasks_detail'),
    path('tasks/<int:pk>/update', UpdateTaskAPIview.as_view(), name='api_tasks_update'),
    path('tasks/<int:pk>/delete', DeleteTaskAPIview.as_view(), name='api_tasks_delete'),
    path('drf-auth/', include('dj_rest_auth.urls')),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    re_path(r'^auth/', include('djoser.urls.jwt')),
]
