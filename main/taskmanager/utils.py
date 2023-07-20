from .models import *


# добавление любых аргументов для передачи в классы представления
class DataMixin:
    paginate_by = 5

    def get_user_context(self, **kwargs):
        context = kwargs
        return context

# Получение текущей последовательности Задач из СУБД и последующая фильтрация по Айди Пользователя
class UserIdValidateMixin:
    def get_id_queryset(self, curentqueryset):
        queryset = curentqueryset
        user = self.request.user
        if user.is_authenticated:
            queryset = queryset.filter(user_id=user)
        else:
            queryset = Task.objects.none()
        return queryset
