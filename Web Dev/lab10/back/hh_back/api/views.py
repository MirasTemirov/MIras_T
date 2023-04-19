from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy


# Create your views here.
def get_all_companies_list(request):
    companies = Company.objects.all()
    companies_in_json_format = [c.to_json() for c in companies]
    return JsonResponse(companies_in_json_format, safe=False)


def get_company_by_id(request, id):
    try:
        company = Company.objects.get(id=id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)


def get_vacancies_by_company(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancies.all()
        # vacancies = Vacancy.objects.filter(company_id=id)
        vacancies_in_json_format = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_in_json_format, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)


def get_all_vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_in_json_format = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_in_json_format, safe=False)


def get_vacancy_by_id(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)


def get_top_ten_vacancies_list(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    vacancies_in_json_format = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_in_json_format, safe=False)
