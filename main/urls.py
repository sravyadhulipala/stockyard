"""stockyard URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from . import views


app_name = "main"

urlpatterns = [
    path("",views.homepage, name="homepage"),
    path("inventory", views.inventory, name="inventory"),
    path("profile", views.profile, name="profile"),
    path("stockyard", views.stockyard, name="stockyard"),
    path("forecasting", views.forecasting, name="forecasting"),
    path("reports", views.reports, name="reports"),
    path("stockyardprocessed", views.stockyardprocessed, name="stockyardprocessed"),
    path("stockyardsliced", views.stockyardsliced, name="stockyardsliced"),
    path("maps", views.maps, name="maps"),
    path("forecastinglime", views.forecastinglime, name="forecastinglime"),
    path("forecastingcoal", views.forecastingcoal, name="forecastingcoal"),
    path("new", views.new, name="new"),
    path("plan", views.plan, name="plan"),
    path("plansummary", views.plansummary, name="plansummary"),
    path("reports", views.reports, name="reports"),
    path("test", views.test, name="test"),
	path("report1", views.report1, name="report1"),
	path("report2", views.report2, name="report2"),
	path("report3", views.report3, name="report3"),
	path("report4", views.report4, name="report4"),
    
    
]
