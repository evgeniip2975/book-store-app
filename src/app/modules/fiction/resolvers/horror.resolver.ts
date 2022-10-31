import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, } from 'rxjs';
import { IBook } from 'src/app/types/book';
import { HorrorService } from '../services/horror.service';


@Injectable({
  providedIn: 'root',
})
export class HorrorResolver implements Resolve<IBook> {
  constructor(private horrorService: HorrorService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IBook> {
    return this.horrorService.getHorrorById(+route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['home/fiction/horror']);
        return EMPTY;
      })
    );
  }
}
