from django.urls import path

from api.views import get_all_companies_list, get_company_by_id, get_vacancies_by_company, get_all_vacancies_list, \
    get_vacancy_by_id, get_top_ten_vacancies_list

urlpatterns = [
    path('companies/', get_all_companies_list),
    path('companies/<int:id>/', get_company_by_id),
    path('companies/<int:id>/vacancies/', get_vacancies_by_company),
    path('vacancies/', get_all_vacancies_list),
    path('vacancies/<int:id>/', get_vacancy_by_id),
    path('vacancies/top_ten/', get_top_ten_vacancies_list)
]
