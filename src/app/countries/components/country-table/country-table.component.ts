import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styles: []
})
export class CountryTableComponent {
  @Input('data') countries: ICountry[] = [];

  constructor() { }

}
