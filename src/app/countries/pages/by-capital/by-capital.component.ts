import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';

import { ICountry } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  public hasError : boolean     = false;
  public term     : string      = '';
  public capitals : ICountry[]  = [];

  constructor(private countryService: CountryService) { }

  public search(term: string): void {
    this.hasError = false;
    this.term     = term;

    this.countryService.searchCapital(this.term)
      .subscribe((capitals) => {
        this.capitals = capitals;

      }, (err) => {
        this.hasError = true;
        this.capitals = [];
      });
  }
}
