import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  
    constructor( private router : Router,private authService: AuthService) { }
    
      logout() {
        this.authService.logout();
      }
    
      ngOnInit() {
      }
    
      goHome(){
        this.router.navigate(['']);
      }
  
}
