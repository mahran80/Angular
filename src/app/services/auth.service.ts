import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Reactive signal to track authentication state
  isLoggedIn = signal<boolean>(this.checkToken());

  constructor(private http: HttpClient) {}

  // Check if token exists in localStorage (Browser environment only)
  private checkToken(): boolean {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('accessToken');
    }
    return false;
  }

  // Send login request and store token on success
  login(credentials: any): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', credentials).pipe(
      tap((res: any) => {
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
          localStorage.setItem('accessToken', res.token);
        }
        this.isLoggedIn.set(true);
      })
    );
  }

  // Remove token and update state
  logout() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
    this.isLoggedIn.set(false);
  }
}