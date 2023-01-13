import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBasket } from '../consts';
import { IBook } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  items: IBook[] = []

  postProductToCart(product: IBook): Observable<IBook> {
    return this.http.post<IBook>(urlBasket, product)
  }

  updateProductToCart(product: IBook) {
    return this.http.put<IBook>(`${urlBasket}/${product.id}`, product)
  }

  removeItemFromBasket(id: number) {
    return this.http.delete<IBook>(`${urlBasket}/${id}`)
  }

  getItems(): Observable<IBook[]> {
    return this.http.get<IBook[]>(urlBasket)
  }
}
