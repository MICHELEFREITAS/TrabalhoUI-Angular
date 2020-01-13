import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Product } from '../models/product';
import {Utils} from '../util/utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  utils: Utils = new Utils();

  // url = 'http://localhost:3000/products';
  url = 'http://loja-microservicos.info:8071/products';
  urlAddToCart = 'http://loja-microservicos.info:8071/product-rabbitmq/producer';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Obtem todos os produtos
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url)
      .pipe(
        // catchError(this.utils.handleError)
      );
  }

  // get a product by id
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.url + '/' + id)
      .pipe(
        catchError(this.utils.handleError)
      );
  }

  // add to cart in backend
  sendSelProdToBackend(product: Product[]) {
    return this.httpClient.post(this.urlAddToCart, JSON.stringify(product), this.httpOptions
    ).pipe(
      // catchError(this.utils.handleError)
    );
  }

  // save a product
  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.url, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.utils.handleError)
      );
  }

  // atualiza um produto
  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.url + '/' + product.id, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.utils.handleError)
      );
  }

  // deleta um produto
  deleteProduct(product: Product) {
    return this.httpClient.delete<Product>(this.url + '/' + product.id, this.httpOptions)
      .pipe(
        catchError(this.utils.handleError)
      );
  }
}
