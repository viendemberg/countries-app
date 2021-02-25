import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';

import { ICountry } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {
  public hasError : boolean     = false;
  public term     : string      = '';
  public countries: ICountry[]  = [];

  public suggest        : ICountry[]  = []
  public showSuggestions: boolean     = false;

  constructor(private countryService: CountryService) { }

  public search(term: string): void {
    this.showSuggestions = false;
    this.hasError        = false;
    this.term            = term;

    this.countryService.searchCountry(this.term)
      .subscribe((countries) => {
        this.countries = countries;

      }, (err) => {
        this.hasError  = true;
        this.countries = [];
      });
  }

  public suggestions(term: string) {
    this.showSuggestions = true;
    this.hasError        = false;
    this.term            = term;

    this.countryService.searchCountry(term)
      .subscribe(
        countries => this.suggest = countries.splice(0,5),
        (err) => this.suggest = []
      );
  }

  public searchSuggested(term: string) {
    this.search(term);
  }
}
