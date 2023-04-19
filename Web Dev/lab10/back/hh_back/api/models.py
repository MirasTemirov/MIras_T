from django.db import models


# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=70, default='')
    description = models.TextField(default='')
    city = models.CharField(default='Almaty', max_length=40)
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
        db_table = 'companies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    def __str__(self):
        return f'Company(id={self.id}, name={self.name}, description={self.description}, city={self.city}, address={self.address})'


class Vacancy(models.Model):
    name = models.CharField(max_length=50, default='')
    description = models.TextField(default='')
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'
        db_table = 'vacancies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary
        }

    def __str__(self):
        return f'Vacancy(id={self.id}, name={self.name}, description={self.description}, salary={self.salary}, company={self.company.name})'
