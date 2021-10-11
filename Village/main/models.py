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
    def child_validator(self, postData):
        errors = {}
        PHONE_REGEX = re.compile(
            r'^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$')

        if len(postData['name']) < 5:
            errors["name"] = "Child's full name must be at least 5 characters long"
        if len(postData['birthday']) == 0:
            errors["birthday"] = "Birthday is required"
        if len(postData['gender']) == 0:
            errors["gender"] = "Please declare a gender"
        if len(postData['econtact']) == 0:
            errors["econtact"] = "Must have an Emergency Contact"
        if len(postData['enumber']) < 7 or len(postData['enumber']) > 13:
            errors["enumber"] = "Phone number must be 7-13 digits long"
        if not PHONE_REGEX.match(postData['enumber']):
            errors['enumber'] = "Must be a valid phone number"
        print(errors)
        return errors

# Create your models here.

class User(models.Model):
    #id
    first = models.CharField(max_length=200)
    last = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    birthday = models.DateField(auto_now=False)
    password = models.CharField(max_length=16)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return f"{self.first} {self.last}"

class Child(models.Model):
    # id
    image = models.ImageField(upload_to='child/%Y/%m/%d/', blank=True, default='')
    name = models.CharField(max_length=200, default='Name')
    birthday = models.DateField(auto_now=False)
    gender = models.CharField(max_length=50, blank=True)
    econtact = models.CharField(max_length=200, blank=True)
    enumber = models.CharField(max_length=13, blank=True)
    summary = models.TextField( max_length=800, blank=True)
    guardian = models.ForeignKey(User, related_name='children', on_delete=models.CASCADE)
    likes = models.TextField(max_length=200, blank=True)
    dislikes = models.TextField(max_length=200, blank=True)
    strengths = models.TextField(max_length=200, blank=True)
    weaknesses = models.TextField(max_length=200, blank=True)
    diag = models.TextField(max_length=100, blank=True)
    diet = models.TextField(max_length=100, blank=True)
    phys = models.TextField(max_length=100, blank=True)
    meds = models.TextField(max_length=100, blank=True)
    doc = models.TextField(max_length=300, blank=True)
    objects = ChildManager()
    # behaviors onetoMany
    # episodes onetoMany

    def __str__(self):
        return f"{self.name} {self.id}" 
