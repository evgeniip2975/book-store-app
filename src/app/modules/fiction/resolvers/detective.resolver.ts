import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable } from 'rxjs';
import { DetectiveService } from '../services/detective.service';
import { IBook } from '../../../types/book';

@Injectable({
  providedIn: 'root',
})
export class DetectiveResolver implements Resolve<IBook> {
  constructor(
    private detectiveService: DetectiveService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IBook> {
    return this.detectiveService.getDetectiveById(+route.params?.['id']).pipe(
      catchError(() => {
        this.router.navigate(['home/fiction/detective']);
        return EMPTY;
      })
    );
  }
}
