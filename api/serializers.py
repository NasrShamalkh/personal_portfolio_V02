from rest_framework import serializers
from .models import ProjectModel, BlogModel, PersonalInfoModel


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectModel
        fields = ['name', 'description', 'imageID', 'link', 'codeLink', 'demoLink', 'role']


class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogModel
        fields = ['name', 'link', 'imageID', 'description']


class PersonalInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PersonalInfoModel
        fields = ['phoneNumber', 'email', 'gitHubLink', 'bloggerLink', 'linkedInLink', 'imageID', 'cvLink']
