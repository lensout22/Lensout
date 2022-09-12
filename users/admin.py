from django.contrib import admin
from django.contrib.auth.models import Group
from users.models import *
admin.site.unregister(Group)
admin.site.register(Aboutme)
admin.site.register(Contract)
admin.site.register(Profile)
admin.site.register(Contest)
admin.site.register(Subscriber)
admin.site.register(ContestMaterial)
admin.site.register(BalanceAdd)
admin.site.register(RequestWithdraw)
admin.site.register(HomeSlider)
admin.site.register(Feedback)
