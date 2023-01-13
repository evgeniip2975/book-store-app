import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlDetective } from '../../../consts';
import { IBook } from '../../../types/book';

@Injectable({
  providedIn: 'root',
})
export class DetectiveService {
  constructor(private http: HttpClient) {}


  getAllDetective(): Observable<IBook[]> {
    return this.http.get<IBook[]>(urlDetective)
  }

  getDetectiveById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${urlDetective}/${id}`)
  }
}
