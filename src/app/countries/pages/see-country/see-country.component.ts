import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { ICountry } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: ICountry;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCountryByAlpha(id)),
        tap(res => console.log(res))
      )
      .subscribe(country => this.country = country);

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log(id);

    //     this.countryService.getCountryByAlpha(id)
    //       .subscribe( country => {
    //         console.log(country);
    //       })
    //   })
  }

}
