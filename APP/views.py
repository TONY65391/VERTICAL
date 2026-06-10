from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import HttpResponse
from django.template import loader
from django.conf import settings

# Create your views here.

def landing(request):
    template = loader.get_template('landing.html')
    return HttpResponse(template.render(request=request))