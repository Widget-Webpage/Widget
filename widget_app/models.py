from django.db import models
from rest_framework import serializers

# Create your models here.
class Widget(models.Model):
    name = models.CharField(max_length=20)
    icon_filename = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class WidgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Widget
        fields = ('name', 'icon_filename')