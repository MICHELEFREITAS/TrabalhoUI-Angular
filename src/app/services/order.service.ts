import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Utils} from '../util/utils';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  utils: Utils = new Utils();

  urlGetOrder = 'http://loja-microservicos.info:8073/lastorder';

  constructor(private httpClient: HttpClient) {
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // get order
  getOrder() {
    return this.httpClient.get(this.urlGetOrder)
      .pipe(
        catchError(this.utils.handleError)
      );
  }

}
