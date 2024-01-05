from django.http import HttpResponse
from django.http import JsonResponse
import datetime


def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    # return HttpResponse(html)
    return JsonResponse({"movies": "ya!"})

def get_events(request):
    now = datetime.datetime.now()
    html = "<html><body>It is now %s.</body></html>" % now
    # return HttpResponse(html)
    return JsonResponse({"events": {"soccer": "", "bar_pool": ""}})