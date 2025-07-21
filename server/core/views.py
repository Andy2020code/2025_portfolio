from django.shortcuts import render, redirect

# Create your views here.
def home(request):
	return render(request, 'home.html')

def design_test(request):
	return render(request, 'design_test.html')