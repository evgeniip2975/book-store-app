import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiHorror } from 'src/app/consts';
import { IBook } from 'src/app/types/book';

@Injectable({
  providedIn: 'root'
})
export class HorrorService {

  constructor(private http: HttpClient) { }

  getAllHorror(): Observable<IBook[]> {
    return this.http.get<IBook[]>(apiHorror)
  }
  getHorrorById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${apiHorror}/${id}`)
  }
}
