import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3300/api/login';
  private tokenKey = 'auth_token';
  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    console.log('Attempting to login with email:', email); // Log email
    return this.http.post<{ token: string }>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        console.log('Login response:', response); // Log login response
        if (response && response.token) {
          this.saveToken(response.token);
        } else {
          console.log('No token received on login');
        }
      }),
      catchError(error => {
        console.error('Login error:', error); // Log any login error
        throw error;
      })
    );
  }

  logout() {
    console.log('Logging out...'); // Log when the user logs out
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  saveToken(token: string) {
    console.log('Saving token to localStorage:', token); // Log token save
    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticated.next(true);
  }

  getToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    console.log('Retrieved token from localStorage:', token); // Log token retrieval
    return token;
  }

  isLoggedIn() {
    const status = this.isAuthenticated.getValue();
    console.log('User isLoggedIn status:', status); // Log authentication status
    return this.isAuthenticated.asObservable();
  }

  private hasToken(): boolean {
    const hasToken = !!localStorage.getItem(this.tokenKey);
    console.log('Has token in localStorage:', hasToken); // Log token presence
    return hasToken;
  }
}
