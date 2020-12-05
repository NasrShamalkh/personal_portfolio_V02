from django.contrib import admin
from .models import ProjectModel, BlogModel, PersonalInfoModel

# Register your models here.
admin.site.register(ProjectModel)
admin.site.register(BlogModel)
admin.site.register(PersonalInfoModel)
