import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Beer } from '../Beer';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {}

  getRandomBeer(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.apiUrl + '/random').pipe(
      tap((_) => console.log('fetched beers')),
      catchError(this.handleError<Beer[]>('getBeers', []))
    );
  }

  searchForABeer(beer: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.apiUrl + '?beer_name=' + beer).pipe(
      tap((_) => console.log('fetched beers')),
      catchError(this.handleError<Beer[]>('getBeers', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
