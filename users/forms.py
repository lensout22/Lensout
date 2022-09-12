from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from users.models import *


class UserchangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name', 'is_staff', 'is_superuser')

    def clean_password(self):
        return self.initial['password']


class DateT(forms.DateTimeInput):
    input_type = 'date'


class DateIn(forms.DateInput):
    input_type = 'date'


class DT(forms.TimeInput):
    input_type = 'time'


class AddContest(forms.ModelForm):
    start_on = forms.DateField(label="Start Date", widget=DateIn)
    end_on = forms.DateField(label="End Date", widget=DateIn)
    start_time = forms.TimeField(label="Start Time", widget=DT)
    end_time = forms.TimeField(label="End Time", widget=DT)

    class Meta:
        model = Contest
        fields = ['title', 'demo_pic', 'details', 'winner_ammount', 'start_on', 'start_time', 'end_on', 'end_time']


class UpdateContestForm(forms.ModelForm):
    start_on = forms.DateField(label="Start Date", widget=DateIn)
    end_on = forms.DateField(label="End Date", widget=DateIn)
    start_time = forms.TimeField(label="Start Time", widget=DT)
    end_time = forms.TimeField(label="End Time", widget=DT)

    class Meta:
        model = Contest
        fields = ['title', 'demo_pic', 'details', 'winner_ammount', 'start_on', 'start_time', 'end_on', 'end_time']
