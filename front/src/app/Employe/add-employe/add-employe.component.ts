import { EmployeService } from './../../services/employe.service';
import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  private produit : Employe = {
    nom_employe : "",
    nom_court_employe : "",
    ville_employe : "",
    Adresse_employe : "",
    Tel_Fix_employe : "",
    Tel_mobile_employe: "",
    Fax_employe: "",
    adresse_email_employe: ""
  };


  constructor(private service: EmployeService, private router: Router) { }

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }


  produis : Employe[] = [];


  add() {
    console.log(this.produit);
    this.service.add(this.produit).subscribe(station => {
      this.produis = [station, ...this.produis];
      this.router.navigate(["employe"]);
    });
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.produit = this.service.form.value;
      console.log(this.produit);
      this.add();
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }

}
