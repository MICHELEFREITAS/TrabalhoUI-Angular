import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Cart} from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  urlGetCart = 'http://loja-microservicos.info:8072/lastcart';

  constructor(private httpClient: HttpClient) {
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  // Obtem todos os produtos
  getCarts() {
    return this.httpClient.get(this.urlGetCart)
      .pipe(
        catchError(this.handleError)
      );
  }

/*
  // Obtem todos os produtos
  getCarts(): Observable<Cart> {
    return this.httpClient.get<Cart>(this.urlGetCart)
      .pipe(
        catchError(this.handleError)
      );
  }
*/

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
