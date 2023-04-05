from django.urls import path
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, CategoryProductList

urlpatterns = [
    path('products/', ProductList.as_view()),
    path('products/<int:pk>/', ProductDetail.as_view()),
    path('categories/', CategoryList.as_view()),
    path('categories/<int:pk>/', CategoryDetail.as_view()),
    path('categories/<int:id>/products/', CategoryProductList.as_view()),
]
