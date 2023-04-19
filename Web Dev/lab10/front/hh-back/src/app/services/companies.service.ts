import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company} from "../models/company";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://localhost:8000/api/companies/';
  }

  public get_all_companies_list(): Observable<Company[]>{
    return this.http.get<Company[]>(this.BASE_URL);
  }

  public get_company_by_id(id: number): Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}${id}`);
  }
}
