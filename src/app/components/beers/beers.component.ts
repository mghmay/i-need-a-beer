import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { UiService } from 'src/app/services/ui.service';
import { Beer } from '../../Beer';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit, OnDestroy {
  beerSub: Subscription = new Subscription();
  routeSub: Subscription = new Subscription();
  beers: Beer[] = [];
  beer: Beer = {} as Beer;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      if (params['searchTerm']) {
        this.searchForABeer(params['searchTerm']);
        console.log('searching');
      }
    });
  }
  getRandomBeer(): void {
    this.beerSub = this.httpService
      .getRandomBeer()
      .subscribe((beers: Beer[]) => {
        this.beers = beers;
        this.beer = this.beers[0];
      });
  }

  searchForABeer(search: string): void {
    this.beerSub = this.httpService
      .searchForABeer(search)
      .subscribe((beers) => {
        this.beers = beers;
        this.beer = this.beers[0];
      });
  }

  ngOnDestroy(): void {
    if (this.beerSub) {
      this.beerSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
