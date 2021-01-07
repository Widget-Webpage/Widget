from django.shortcuts import render

# Create your views here.
def twitter_widget(request):
    return render(request, "index.html")

def weather_widget(request):
    return render(request, "weather.html")

def empty_canvas(request):
    return render(request, "empty_canvas.html")

def empty_canvas2(request):
    return render(request, "empty_canvas2.html")