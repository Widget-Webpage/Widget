from django.urls import path

from . import views
from .views import WidgetListCreate

urlpatterns = [
    # localhost/
    path('twitter/', views.twitter_widget),

    # localhost/
    path('weather/', views.weather_widget),

    path('', views.empty_canvas),

    path('canvas2', views.empty_canvas2),

    path('test', views.test),

    path('api/<str:widget_name>', WidgetListCreate.as_view()),
]
