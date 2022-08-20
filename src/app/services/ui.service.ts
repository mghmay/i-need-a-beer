import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private beer: string = '';
  private subject = new Subject<any>();

  constructor() {}

  setSearch(beer: string): void {
    this.beer = beer;
    this.subject.next(beer);
  }

  getSearch(): Observable<any> {
    return this.subject.asObservable();
  }
}
