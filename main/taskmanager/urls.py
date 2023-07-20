from django.urls import path
from .views import *

# Маршутизация приложения
urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('login/', LoginUser.as_view(), name='login'),
    path('logout/', logout_user, name='logout'),
    path('reg/', RegisterUser.as_view(), name='reg'),
    path('task/<int:task_id>/', ShowTask.as_view(), name='task'),
    path('add_task/', AddTask.as_view(), name='add_task'),
    path('task/<int:task_id>/update', UpdateTask.as_view(), name='update_task'),
    path('task/<int:task_id>/delete', DeleteTask.as_view(), name='delete_task')
]
