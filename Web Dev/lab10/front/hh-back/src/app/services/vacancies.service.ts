import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {

  private BASE_URL: string;
  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://localhost:8000/api/vanacies/';
  }
}
