
from rest_framework.routers import SimpleRouter, Route, DynamicRoute

from api.views import TaskManagerViewSet


class CustomTaskRouter(SimpleRouter):
    routes = [
        # Маршрут для представления задач
        Route(
            url=r'^{prefix}/$',
            mapping={'get': 'list'},
            name='{basename}',
            detail=False,
            initkwargs={'suffix': 'List'}
        ),

        # Маршрут для представления DeleteTask
        Route(
            url=r'^{prefix}/{lookup}/delete/$',
            mapping={'get': 'retrieve', 'delete': 'destroy'},
            name='{basename}-delete',
            detail=True,
            initkwargs={'suffix': 'Delete'}
        ),
        # Маршрут для представления UpdateTask
        Route(
            url=r'^{prefix}/{lookup}/update/$',
            mapping={'get': 'retrieve', 'put': 'update'},
            name='{basename}-update',
            detail=True,
            initkwargs={'suffix': 'Update'}
        ),
        # Маршрут для представления AddTask
        Route(
            url=r'^{prefix}/create/$',
            mapping={'post': 'create'},
            name='{basename}-create',
            detail=False,
            initkwargs={'suffix': 'Create'}
        ),
        # Маршрут для представления ShowTask
        Route(
            url=r'^{prefix}/{lookup}/$',
            mapping={'get': 'retrieve'},
            name='{basename}-detail',
            detail=True,
            initkwargs={'suffix': 'Detail'}
        ),
    ]


# Создание

taskRouter = CustomTaskRouter()
taskRouter.register(r'tasks', TaskManagerViewSet, basename='tasks')