from rest_framework import serializers
from taskmanager.models import *


class TaskSerializer(serializers.ModelSerializer):
    user_id = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Task
        fields = "__all__"