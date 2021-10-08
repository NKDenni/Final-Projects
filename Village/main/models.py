from django.core.exceptions import DisallowedHost
from django.db import models
from datetime import datetime
from django.db.models.deletion import CASCADE
from django.db.models.fields import CharField, DateField, TextField
from django.db.models.fields.files import ImageField
# from django.contrib.postgres.fields import ArrayField

import re

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        date_format = "%Y-%m-%d"
        birthday = postData['birthday']

        if len(postData['first']) < 2:
            errors["first"] = "First name must have at least 2 characters"
        if len(postData['last']) < 2:
            errors["last"] = "Last name must have at least 2 characters"
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Invalid email address"
        if postData['password'] != postData['confirm_password']:
            errors["password"] = "Passwords don't match"
        if len(postData['password']) < 8 :
            errors["password"] = "Password must be at least 8 charachters long"
        if len(postData['birthday']) == 0:
            errors["birthday"] = "Birthday is required"
        else:
            a = datetime.strptime(str(datetime.now().date()), date_format)
            b = datetime.strptime(str(birthday), date_format)
            delta = b - a
            if delta.days >= -6570:
                errors["birthday"] = "Must be at least 18 years of age to sign up as a Parent"
        print(errors)
        return errors


class ChildManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        date_format = "%Y-%m-%d"
        birthday = postData['birthday']

        if len(postData['name']) < 5:
            errors["name"] = "Child's full name must be at least 5 characters long"
        if len(postData['birthday']) == 0:
            errors["birthday"] = "Birthday is required"
        print(errors)
        return errors

# Create your models here.
class Child(models.Model):
    # id
    picture = ImageField(upload_to='child/%Y/%m/%d/', blank=True)
    name = CharField(max_length=200)
    birthday = DateField(auto_now=False)
    gender = CharField(max_length=50, blank=True)
    econtact = CharField(max_length=200, blank=True)
    enumber = CharField(max_length=11, blank=True)
    summary = TextField(max_length=1000, blank=True)
    likes = TextField(max_length=600, blank=True)
    dislikes = TextField(max_length=600, blank=True)
    strengths = TextField(max_length=600, blank=True)
    weaknesses = TextField(max_length=600, blank=True)
    diag = TextField(max_length=600, blank=True)
    diet = TextField(max_length=600, blank=True)
    phys = TextField(max_length=600, blank=True)
    meds = TextField(max_length=600, blank=True)
    # behaviors onetoMany
    # episodes onetoMany

    def __str__(self):
        return f"{self.first} {self.last}"

class User(models.Model):
    #id
    first = CharField(max_length=200)
    last = CharField(max_length=200)
    email = CharField(max_length=200)
    birthday = DateField(auto_now=False)
    password = CharField(max_length=16)
    child = models.ForeignKey(Child, related_name='guardian',on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ChildManager()

    def __str__(self):
        return f"{self.first} {self.last}"
