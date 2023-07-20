from django.apps import AppConfig


# Конфиг приложения Менеджера задач
class TaskmanagerConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'taskmanager'
    verbose_name = 'Менеджер задач'
    verbose_name_plural = 'Менеджер задач'
