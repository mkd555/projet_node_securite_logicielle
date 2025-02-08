import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent implements OnInit {

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
