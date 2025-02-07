import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jakar-Senegal';

  constructor(private router: Router) {}

  isRouterOutletOnly(): boolean {
    // Afficher le router-outlet uniquement pour ces routes
    const currentUrl = this.router.url;
    return (
      currentUrl === '/' ||
      currentUrl.startsWith('/#') ||
      currentUrl.startsWith('/dashboardEmploye') ||
      currentUrl.startsWith('/dashboardClient') ||
      currentUrl === '/connexion' ||
      currentUrl === '/inscription' ||
      currentUrl === '/dashboardClient' ||
      currentUrl === '/dashboardEmploye'
    );
  }
}
