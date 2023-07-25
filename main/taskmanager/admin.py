from django.contrib import admin

from .models import *


# Кастомизация админ панели
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'date_time_of_completion', 'time_create', 'user')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_filter = ('time_create', 'user')


# Регистрация модели задача в админ панели
admin.site.register(Task, TaskAdmin)
