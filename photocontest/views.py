from django.shortcuts import render
from users.models import *

def Home(request):
    cons = Contest.objects.all().filter(winner=None,end_on__gt=date.today()).order_by("-id")[:4]
    con = Contest.objects.all()
    photoco = ContestMaterial.objects.all()
    l = 0
    for p in photoco:
        l = l + p.total_loved()
    w = 0
    for c in con:
        if c.total_winner() == 1:
            w = w + 1
    sliders=HomeSlider.objects.all().order_by("-id")[:3]
    feedback=Feedback.objects.filter(status=True).order_by("-id")[:5]
    print(feedback)
    context = {
        'contest': cons,
        'conn': photoco,
        'loved': l,
        'winner': w,
        'co': con,
        'sliders':sliders,
        'feedback':feedback,
        'rattingLoop':range(1,6),
    }
    return render(request,'index.html',context)