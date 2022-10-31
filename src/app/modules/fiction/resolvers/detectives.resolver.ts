import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, } from 'rxjs';
import { IBook } from 'src/app/types/book';
import { DetectiveService } from '../services/detective.service';


@Injectable({
  providedIn: 'root',
})
export class DetectivesResolver implements Resolve<IBook[]> {
  constructor(private detectiveService: DetectiveService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IBook[]> {
    return this.detectiveService.getAllDetective();
  }
}
