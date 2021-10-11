from django.contrib.messages.api import error
from django.http import request
import math
from datetime import datetime
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Child
from django.core.files.storage import FileSystemStorage
# from .forms import UserForm
import bcrypt

# Create your views here.

def login_reg(request):
    return render(request, 'login_reg.html')

def register(request):
    if request.method == "POST":
        
        errors = User.objects.basic_validator(request.POST)
        user_list = User.objects.filter(email=request.POST['email'])
        if user_list:
            messages.error(request, "Account already exists")
            return redirect('/')

        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect('/')

        hashed_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
        user1 = User.objects.create(
            first = request.POST['first'],
            last = request.POST['last'],
            email = request.POST['email'],
            birthday = request.POST['birthday'],
            password = hashed_pw
        )
        request.session['log_user'] = user1.id

        return redirect('/dash')
    return redirect('/')

def login(request):
    if request.method == "POST":
        user = User.objects.filter(email=request.POST['email'])
        if user:
            log_user = user[0]
            if bcrypt.checkpw(request.POST['password'].encode(), log_user.password.encode()):
                request.session['log_user'] = log_user.id
                return redirect('/dash')
        messages.error(request, "Email or password is incorrect", extra_tags='log_user')
    return redirect('/')

def dash(request):
    if 'log_user' not in request.session:
        request.session.clear()
        return redirect('/')
    user1 = User.objects.get(id=request.session['log_user'])
    kids = user1.children.all()

    if len(kids) == 0:
        context = {
            'log_user': User.objects.get(id=request.session['log_user']),
        }
    else:
        this_kid = kids[0]
        print(this_kid.id)
        date_format = "%Y-%m-%d"
        birthday = this_kid.birthday
        print(birthday)
        a = datetime.strptime(str(datetime.now().date()), date_format)
        b = datetime.strptime(str(birthday), date_format)
        delta = a - b
        age = math.floor((delta.days)*0.002738)

        context = {
            'log_user': User.objects.get(id=request.session['log_user']),
            'this_child': Child.objects.get(id=this_kid.id),
            'age': age,
        }

    return render(request, 'dash.html', context)

def profile(request):
    if 'log_user' not in request.session:
        request.session.clear()
        return redirect('/')

    user1 = User.objects.get(id=request.session['log_user'])
    kids = user1.children.all()

    if len(kids) == 0:
        context = {
            'log_user': User.objects.get(id=request.session['log_user']),
        }
    else:
        this_kid = kids[0]
        print(this_kid.id)
        context = {
            'log_user': User.objects.get(id=request.session['log_user']),
            'this_child': Child.objects.get(id=this_kid.id),
        }

    return render(request, 'profile.html', context)

def update_img(request):
    if request.method == "POST":
        user = User.objects.get(id=request.session['log_user'])
        kids = user.children.all()
        this_kid = kids[0]

        this_kid.image = request.FILES['image']
        this_kid.save()

    return redirect('/dash')


def update(request):
    if request.method == "POST":
        errors = Child.objects.child_validator(request.POST)
        user = User.objects.get(id=request.session['log_user'])
        print(user.id)

        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect('/profile')

        kids = user.children.all()
        this_kid = kids[0]
        print(this_kid)

        this_kid = Child.objects.get(id=this_kid.id)
        this_kid.name = request.POST['name']
        this_kid.birthday = request.POST['birthday']
        this_kid.gender = request.POST['gender']
        this_kid.econtact = request.POST['econtact']
        this_kid.enumber = request.POST['enumber']
        this_kid.summary = request.POST['summary']
        this_kid.likes = request.POST['likes']
        this_kid.dislikes = request.POST['dislikes']
        this_kid.strengths = request.POST['strengths']
        this_kid.weaknesses = request.POST['weaknesses']
        this_kid.diag = request.POST['diag']
        this_kid.diet = request.POST['diet']
        this_kid.phys = request.POST['phys']
        this_kid.meds = request.POST['meds']
        this_kid.doc = request.POST['doc']
        this_kid.save()

    return redirect('/dash')


def new(request):
    if request.method == "POST":
        errors = Child.objects.child_validator(request.POST)
        user = User.objects.get(id=request.session['log_user'])
        print(user.id)

        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect('/profile')

        child1 = Child.objects.create(
            name=request.POST['name'],
            birthday=request.POST['birthday'],
            gender=request.POST['gender'],
            guardian=user,
            econtact=request.POST['econtact'],
            enumber=request.POST['enumber'],
            summary=request.POST['summary'],
            likes=request.POST['likes'],
            dislikes=request.POST['dislikes'],
            strengths=request.POST['strengths'],
            weaknesses=request.POST['weaknesses'],
            diag=request.POST['diag'],
            diet=request.POST['diet'],
            phys=request.POST['phys'],
            meds=request.POST['meds'],
            doc=request.POST['doc']
        )

    return redirect('/dash')

def history(request):
    user=User.objects.get(id=request.session['log_user'])

    return render(request,'history.html')

def logout(request):
    request.session.clear()
    return redirect('/')
