import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3300/api/login';
  private tokenKey = 'auth_token';
  private roleKey = 'user_role'; // Stockage du rôle
  private maxAttempts = 3;
  private lockoutTime = 5 * 60 * 1000; // 5 minutes en millisecondes

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{ token: string; role: string }>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        if (response && response.token) {
          this.saveToken(response.token);
          this.saveRole(response.role); // Sauvegarde du rôle
          this.redirectUserByRole(response.role); // Redirection après connexion
        }
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.resetLoginAttempts();
  }

  saveRole(role: string) {
    localStorage.setItem(this.roleKey, role);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.router.navigate(['/connexion']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  getLoginAttempts(): number {
    return Number(localStorage.getItem('loginAttempts')) || 0;
  }

  incrementLoginAttempts() {
    let attempts = this.getLoginAttempts() + 1;
    localStorage.setItem('loginAttempts', attempts.toString());
  }

  resetLoginAttempts() {
    localStorage.removeItem('loginAttempts');
    localStorage.removeItem('lockoutTime');
  }

  setLockTime() {
    localStorage.setItem('lockoutTime', Date.now().toString());
  }

  isLocked(): boolean {
    const lockoutTime = Number(localStorage.getItem('lockoutTime')) || 0;
    if (!lockoutTime) return false;

    const elapsed = Date.now() - lockoutTime;
    if (elapsed < this.lockoutTime) {
      return true;
    } else {
      this.resetLoginAttempts();
      return false;
    }
  }

  redirectUserByRole(role: string) {
    if (role === 'client') {
      this.router.navigate(['/dashboardClient']);
    } else if (role === 'employer') {
      this.router.navigate(['/dashboardEmploye']);
    } else if (role === 'admin') {
      this.router.navigate(['/produit']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
