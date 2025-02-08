import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const attempts = this.authService.getLoginAttempts();
    const isLocked = this.authService.isLocked();

    if (isLocked) {
      this.errorMessage = `Trop de tentatives échouées. Votre compte est verrouillé. Réessayez après 5 minutes.`;
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.authService.saveRole(response.role); // Sauvegarde du rôle après la connexion
        this.authService.resetLoginAttempts(); // Réinitialise après une connexion réussie
        
        // Redirection après connexion en fonction du rôle
        this.authService.redirectUserByRole(response.role); // Utilise la méthode pour rediriger l'utilisateur
      },
      error: () => {
        this.authService.incrementLoginAttempts();
        const remainingAttempts = 3 - (attempts + 1);
        this.errorMessage = `Email ou mot de passe invalide. Il vous reste ${remainingAttempts} tentative(s).`;

        if (attempts + 1 >= 3) {
          this.authService.setLockTime();
          this.errorMessage = `Compte verrouillé. Réessayez après 5 minutes.`;
        }
      }
    });
  }
}
