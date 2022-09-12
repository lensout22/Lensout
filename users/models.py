from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.urls import reverse
from django.template.loader import render_to_string
from django.dispatch import receiver
from django.core.mail import send_mail, EmailMessage
from datetime import date, timedelta, datetime
from users.tokens import account_activation_token

Gender_Status = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Others', 'Others'),
)
USER_Status = (
    ('p', 'Photo Grapher'),
    ('c', 'Contest Organizer'),
)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(choices=Gender_Status, blank=True, max_length=12)
    role = models.CharField(choices=USER_Status, blank=True, max_length=12)
    phone = models.CharField(max_length=11, blank=True)
    city = models.CharField(max_length=50, blank=True)
    about = models.TextField(blank=True, max_length=500)
    photo = models.ImageField(upload_to="profile/", blank=True, default="default.png")
    balance = models.FloatField(default=0.0)

    def __str__(self):
        return str(self.user)


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()


class ContestMaterial(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to="ContestMaterial/", blank=False)
    post_on = models.DateField(auto_now=True, auto_now_add=False)
    love = models.ManyToManyField(User, blank=True, related_name="love")

    def __str__(self):
        return str(self.author)

    def total_loved(self):
        return self.love.count()

CONTEST_TYPE = (
    ('free', 'Free'),
    ('paid', 'Paid'),
)


class Contest(models.Model):
    title = models.CharField(max_length=100, blank=False)
    type=models.CharField(choices=CONTEST_TYPE,max_length=20,blank=False)
    details = models.TextField(max_length=800, blank=False)
    post_by = models.ForeignKey(User, blank=False, on_delete=models.CASCADE)
    demo_pic = models.ImageField(upload_to="Contest/", blank=False, default="2.jpg")
    start_on = models.DateField(auto_now=False, auto_now_add=False)
    start_time = models.TimeField(auto_now=False, auto_now_add=False)
    end_on = models.DateField(auto_now=False, auto_now_add=False)
    end_time = models.TimeField(auto_now=False, auto_now_add=False)
    winner_ammount = models.FloatField(blank=False)
    joined = models.ManyToManyField(User, blank=True, related_name="joined")
    contest_attends = models.ManyToManyField(ContestMaterial, blank=True)
    winner = models.ManyToManyField(User, blank=True, related_name="winner")

    def __str__(self):
        return self.title

    def con_sample(self):
        return self.details[:100]

    def ConvertSecond(self):
        current_date = date.today()
        import time
        current_time = datetime.now().time()

        current_time = current_time.strftime("%H:%M:%S")
        ftr = [3600, 60, 1]
        ctime = sum(
            [a * b for a, b in zip(ftr, map(int, current_time.split(':')))])
        endtime = (self.end_time.strftime("%H:%M:%S"))
        endtime = sum(
            [a * b for a, b in zip(ftr, map(int, endtime.split(':')))])
        res = self.end_on - current_date
        return res.total_seconds() + (endtime - ctime)

    def get_absolute_url(self):
        return reverse('viewcontest', kwargs={'id': self.id})

    def upload_absolute_url(self):
        return reverse('viewcontest', kwargs={'id': self.id})

    def total_winner(self):
        val = 1
        if self.winner.exists():
            return val

    def update_absolute_url(self):
        return reverse('updatecontest', kwargs={'id': self.id})


class Subscriber(models.Model):
    subscriber = models.ForeignKey(User, on_delete=models.CASCADE)
    until_date = models.DateField(blank=True, null=True)
    payment = models.FloatField(default=0)

    def __str__(self):
        return str(self.subscriber)

    def has_pad(self):
        current_date = date.today()
        if self.until_date > current_date:
            return True


class BalanceAdd(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    on_date = models.DateField(auto_now=True, auto_now_add=False)
    amount = models.FloatField(default=0)

    def __str__(self):
        return str(self.owner)


class RequestWithdraw(models.Model):
    request_user = models.ForeignKey(User, on_delete=models.CASCADE)
    paypal = models.EmailField(max_length=20, blank=False, null=True)
    payment = models.FloatField(default=0)
    on_date = models.DateField(auto_now=True, auto_now_add=False)
    status = models.BooleanField(default=False)

    def __str__(self):
        return str(self.request_user)


class Aboutme(models.Model):
    name = models.CharField(max_length=50, blank=False)
    designation = models.CharField(max_length=50, blank=False)
    photo = models.ImageField(upload_to="myself/", blank=False)
    details = models.TextField(max_length=500, blank=False)
    skills_deatils = models.TextField(max_length=300, blank=False)
    photograpy_skill = models.IntegerField(default=10)
    naturalshot_skill = models.IntegerField(default=10)
    selfiexpert_skill = models.IntegerField(default=10)
    funnyshot_skill = models.IntegerField(default=10)
    phone = models.CharField(max_length=11, blank=False)
    email = models.EmailField(max_length=100, blank=False)
    address = models.CharField(max_length=100, blank=False)
    facebook = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name


class HomeSlider(models.Model):
    slider = models.ImageField(upload_to="Sliders/", blank=False)
    created = models.DateField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return str(self.created)


class Contract(models.Model):
    name = models.CharField(max_length=30, blank=False)
    email = models.EmailField(max_length=30, blank=False)
    phone = models.CharField(max_length=11, blank=True)
    subject = models.CharField(max_length=30, blank=False)
    message = models.TextField(max_length=400, blank=False)
    post_on = models.DateField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.name



class Feedback(models.Model):
    user=models.ForeignKey(User,on_delete=models.DO_NOTHING)
    feedback=models.TextField(max_length=300,blank=False)
    ratting=models.PositiveIntegerField(default=5)
    status=models.BooleanField(default=False)
    created=models.DateField(auto_now=True)


