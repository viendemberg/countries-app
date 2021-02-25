import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';

import { ICountry } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent {

  regions     : string[]    = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string      = '';
  countries   : ICountry[]  = []

  constructor(private countryService: CountryService) { }

  activateRegion(region: string) {
    if (region === this.activeRegion) return;

    this.activeRegion = region;
    this.countries    = [];

    this.countryService.searchRegion(region)
      .subscribe((countries) => this.countries = countries);
  }

  getRegionClass(region: string): string {
    return (region === this.activeRegion)
              ? 'btn btn-outline-primary'
              : 'btn btn-outline-primary';
  }
}
