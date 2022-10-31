import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IUser } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isloginIn() {
    return this.getToken() !== null;
  }

  login(userInfo: IUser): Observable<string | boolean> {
    if (
      userInfo.email === 'admin@gmail.com' &&
      userInfo.password === 'admin123'
    ) {
      this.setToken('ghaflghkldfvjnklanriogherighawerwe');
      return of(true);
    }
    return throwError(() => new Error('Faled Login'));
  }
  logout() {
    if (confirm('Are you sure ?')) {
      localStorage.removeItem('token');
      this.router.navigate(['home']);
    }
  }
}
