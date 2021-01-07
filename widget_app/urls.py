from django.urls import path

from . import views

urlpatterns = [
    # localhost/
    path('twitter/', views.twitter_widget),

    # localhost/
    path('weather/', views.weather_widget),

    path('', views.empty_canvas),

    path('canvas2', views.empty_canvas2),
]
