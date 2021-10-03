from django import forms


class UserForm(forms.Form):
    #id
    first = forms.CharField(max_length=200)
    last = forms.CharField(max_length=200)
    email = forms.CharField(max_length=200)
    birthday = forms.DateField(auto_now=False)
    password = forms.CharField(max_length=16)
