from django.contrib.auth import logout, login
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView
from django.http import HttpResponseNotFound
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

from .forms import *
from .utils import *


# Удаление задачи
class DeleteTask(DataMixin, DeleteView, UserIdValidateMixin):
    model = Task
    template_name = 'taskmanager/delete_task.html'
    success_url = reverse_lazy('home')
    pk_url_kwarg = 'task_id'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Удаление задачи")
        return dict(list(context.items()) + list(c_def.items()))

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = super().get_id_queryset(queryset)
        return queryset


# Обновление задачи
class UpdateTask(DataMixin, UpdateView, UserIdValidateMixin):
    model = Task
    form_class = AddTaskForm
    template_name = 'taskmanager/update_task.html'
    pk_url_kwarg = 'task_id'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Обновление задачи")
        return dict(list(context.items()) + list(c_def.items()))

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = super().get_id_queryset(queryset)
        return queryset


# Главная страница
class Home(DataMixin, ListView, UserIdValidateMixin):
    model = Task
    user_id_field = 'user'
    template_name = 'taskmanager/index.html'
    context_object_name = 'tasks'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Менеджер задач")
        return dict(list(context.items()) + list(c_def.items()))

    def post(self, request, *args, **kwargs):
        return self.get(request, *args, **kwargs)

    def get_queryset(self):
        queryset = super().get_queryset()
        sort_by = self.request.POST.get('sort_by')
        if sort_by == 'date_time_of_completion':
            queryset = queryset.order_by('date_time_of_completion')
        queryset = super().get_id_queryset(queryset)
        return queryset


# Регистрация пользователя
class RegisterUser(DataMixin, CreateView):
    form_class = RegisterUserForm
    template_name = 'taskmanager/reg.html'
    success_url = reverse_lazy('home')

    # Получение данных от пользователя и datamixin
    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Регистрация")
        return dict(list(context.items()) + list(c_def.items()))

    # Когда пользователь зарегистрировался, автоматически залогинился
    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('home')


# Авторизация пользователя
class LoginUser(DataMixin, LoginView):
    form_class = LoginUserForm
    template_name = 'taskmanager/login.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Авторизация")
        return dict(list(context.items()) + list(c_def.items()))

    def get_success_url(self):
        return reverse_lazy('home')


# Выход из учётной записи
def logout_user(request):
    logout(request)
    return redirect('home')


# Показ конкретной задачи по его id
class ShowTask(LoginRequiredMixin, DataMixin, DetailView, UserIdValidateMixin):
    model = Task
    template_name = 'taskmanager/task.html'
    context_object_name = 'task'
    pk_url_kwarg = 'task_id'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Просмотр задачи")
        return dict(list(context.items()) + list(c_def.items()))

    def get_queryset(self):
        queryset = super().get_queryset()
        queryset = super().get_id_queryset(queryset)
        return queryset


# Добавление новой записи
class AddTask(LoginRequiredMixin, DataMixin, CreateView):
    form_class = AddTaskForm
    template_name = 'taskmanager/add_task.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        c_def = self.get_user_context(title="Добавление задачи")
        return dict(list(context.items()) + list(c_def.items()))

    # Автоматическое присваивание id авторизованного пользователя в поле user_id Модели Задача
    def form_valid(self, form):
        user = self.request.user
        form.instance.user = user
        return super().form_valid(form)


# Если страница не найдена
def pageNotFound(request, exception):
    return HttpResponseNotFound('<h1>Страница не найдена</h1>')
