import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-employe',
  templateUrl: './dashboard-employe.component.html',
  styleUrls: ['./dashboard-employe.component.css']
})
export class DashboardEmployeComponent implements OnInit {


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
