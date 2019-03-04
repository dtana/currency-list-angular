import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeCurrencies(currencyList: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://ng-currency-app.firebaseio.com/data.json',
      currencyList,
      {headers: headers});
  }

  getCurrencies() {
    return this.http.get('https://ng-currency-app.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}
