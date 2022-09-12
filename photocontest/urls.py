from django.contrib import admin
from django.urls import path,include
from .import views
admin.site.site_title='Lensout'
admin.site.index_title =''
admin.site.site_header='Lensout Admin Panel'
from django.views.i18n import JavaScriptCatalog
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('jsi18n',JavaScriptCatalog.as_view(),name="js-catlog"),
    path('',views.Home,name="home"),
    path('accounts/', include('users.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)