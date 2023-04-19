import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/company/company.component';
import { TopVacanciesComponent } from './components/top-vacancies/top-vacancies.component';
import {HttpClientModule} from "@angular/common/http";
import {CompaniesService} from "./services/companies.service";
import {VacanciesService} from "./services/vacancies.service";

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    CompanyComponent,
    TopVacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CompaniesService,
    VacanciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
