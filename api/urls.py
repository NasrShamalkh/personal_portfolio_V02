from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.get_projects),
    path('blogs/', views.get_blogs),
    path('personalInfo/', views.get_personal_info)
]