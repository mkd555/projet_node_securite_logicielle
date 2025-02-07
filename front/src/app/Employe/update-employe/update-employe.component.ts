import { EmployeService } from '../../services/employe.service';
import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/model/employe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  isUpdate: Boolean = false;

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

  
  constructor(private service: EmployeService, private router: Router) {}

  ngOnInit() {
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  produits : Employe[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.produit = this.service.form.value;
    this.service.update(this.produit).subscribe(produit => {
      console.log(produit);
      this.router.navigate(["employe"]);
    });
  }

  onAnuller() {
    this.router.navigate(["employe"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }

}
