from django.shortcuts import render

# Create your views here.
def rabbi(request):
    return render(request, 'rabbi.html')