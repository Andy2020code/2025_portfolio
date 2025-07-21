from django.urls import path
from . import views


app_name= 'core'

urlpatterns = [
    path('', views.home, name='home'),
    path('design_test/', views.design_test, name='design_test'),
]