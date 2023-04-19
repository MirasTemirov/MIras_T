import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CompaniesComponent} from "./components/companies/companies.component";
import {CompanyComponent} from "./components/company/company.component";
import {TopVacanciesComponent} from "./components/top-vacancies/top-vacancies.component";

export const routes: Routes = [
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id', component: CompanyComponent},
  {path: 'vacancies/top_ten', component: TopVacanciesComponent},
  {path: '', redirectTo: 'companies', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
