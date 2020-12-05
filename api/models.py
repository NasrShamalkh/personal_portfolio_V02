from django.db import models

# Create your models here.


class ProjectModel(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=600)
    role = models.CharField(max_length=100, blank=True)
    link = models.URLField(blank=True)
    codeLink = models.URLField(blank=True)
    demoLink = models.URLField(blank=True)
    imageID = models.CharField(max_length=1000)
    showProject = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class BlogModel(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=600, blank=True)
    link = models.URLField()
    imageID = models.CharField(max_length=1000)
    showBlog = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class PersonalInfoModel(models.Model):
    phoneNumber = models.CharField(max_length=15)
    email = models.EmailField(max_length=254)
    gitHubLink = models.URLField()
    linkedInLink = models.URLField()
    bloggerLink = models.URLField()
    cvLink = models.URLField()
    imageID = models.CharField(max_length=1000)
