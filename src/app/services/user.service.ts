import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';;
import { catchError, delay, Observable, throwError } from 'rxjs';
import { IProduct } from '../types/products';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 5}
      }),
    })
    .pipe(delay(200), catchError(this.errorHandler.bind(this)));
  }
}
