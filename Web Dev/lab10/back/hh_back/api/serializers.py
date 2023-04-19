from rest_framework import serializers

from api.models import Company, Vacancy


class CompaniesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company


class VacanciesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
