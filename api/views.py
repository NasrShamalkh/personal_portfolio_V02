from .models import ProjectModel, PersonalInfoModel, BlogModel
from .serializers import PersonalInfoSerializer, ProjectSerializer, BlogSerializer
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view


# Create your views here.
@api_view(['GET'])
def get_projects(request):
    if request.method == 'GET':
        projects = ProjectModel.objects.all()
        project_serializer = ProjectSerializer(projects, many=True)
        return JsonResponse(project_serializer.data, status=status.HTTP_200_OK, safe=False)
    return JsonResponse(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_blogs(request):
    if request.method == 'GET':
        blogs = BlogModel.objects.all()
        blogs_serializer = BlogSerializer(blogs, many=True)
        return JsonResponse(blogs_serializer.data, status=status.HTTP_200_OK, safe=False)
    return JsonResponse(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_personal_info(request):
    if request.method == 'GET':
        personal_info = PersonalInfoModel.objects.all()
        personal_info_serializer = PersonalInfoSerializer(personal_info, many=True)
        return JsonResponse(personal_info_serializer.data, status=status.HTTP_200_OK, safe=False)
    return JsonResponse(status=status.HTTP_400_BAD_REQUEST)

