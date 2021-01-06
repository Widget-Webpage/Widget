from django.shortcuts import render

# Create your views here.
def twitter_widget(request):
    return render(request, "index.html")

def weather_widget(request):
    return render(request, "weather.html")