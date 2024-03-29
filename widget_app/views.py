from django.shortcuts import render
from rest_framework import generics
from .models import Widget, WidgetSerializer
# Create your views here.
def twitter_widget(request):
    return render(request, "index.html")

def weather_widget(request):
    return render(request, "weather.html")

def empty_canvas(request):
    context = {'twitter': ["T", "w", "P"],
               'stocks': "S",
               'weather': ["weather_widget1", "weather_widget2"],
               'sample_int': 7}
    return render(request, "empty_canvas.html", context)

def empty_canvas2(request):
    return render(request, "empty_canvas2.html")

def test(request):
    return render(request, "test.html")

class WidgetListCreate(generics.ListCreateAPIView):
    serializer_class = WidgetSerializer

    def get_queryset(self):
        return Widget.objects.filter(name=self.kwargs['widget_name'])