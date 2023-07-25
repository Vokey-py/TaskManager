from django.urls import path, include
from api.views import *
from .routers import *



urlpatterns = [
    path('api/', include(taskRouter.urls))
]