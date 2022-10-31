import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, } from 'rxjs';
import { IBook } from 'src/app/types/book';
import { HorrorService } from '../services/horror.service';


@Injectable({
  providedIn: 'root',
})
export class HorrorsResolver implements Resolve<IBook[]> {
  constructor(private horrorService: HorrorService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IBook[]> {
    return this.horrorService.getAllHorror();
  }
}
