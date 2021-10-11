from . import views
from django.urls import path

urlpatterns = [
    path('', views.login_reg),
    path('register', views.register),
    path('login', views.login),
    path('dash', views.dash),
    path('profile', views.profile),
    path('new', views.new),
    path('update', views.update),
    path('history',views.history),
    path('logout', views.logout),
]
