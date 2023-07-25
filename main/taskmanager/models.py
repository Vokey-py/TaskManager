from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db import models
from django.urls import reverse


# Модель задачи
class Task(models.Model):
    title = models.CharField(max_length=255, verbose_name='Заголовок')
    description = models.TextField(blank=True, verbose_name='Заметки')
    date_time_of_completion = models.DateTimeField(verbose_name='Дата и время выполнения')
    time_create = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    time_update = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Пользователь')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('task', kwargs={'task_id': self.pk})

    class Meta:
        verbose_name = 'Менеджер задач'
        verbose_name_plural = 'Менеджер задач'
        ordering = ['time_create', 'title']
