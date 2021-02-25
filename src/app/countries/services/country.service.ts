import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICountry } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams()
        .set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  public searchCountry(term: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<ICountry[]>(url, { params: this.httpParams });
  }

  public searchCapital(term: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<ICountry[]>(url, { params: this.httpParams });
  }

  public searchRegion(region: string): Observable<ICountry[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<ICountry[]>(url, { params: this.httpParams });
  }

  public getCountryByAlpha(id: string): Observable<ICountry> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<ICountry>(url);
  }
}
