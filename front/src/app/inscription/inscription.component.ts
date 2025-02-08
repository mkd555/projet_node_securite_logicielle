import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user = {
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.user.password !== this.user.confirm_password) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    const url = 'http://localhost:3300/api/registerClient'; 

    this.http.post(url, this.user).subscribe({
      next: (response) => {
        alert('Inscription réussie !');
        this.router.navigate(['/connexion']); 
      },
      error: (error) => {
        console.error('Erreur:', error);
      }
    });
  }
}
