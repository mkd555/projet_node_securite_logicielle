import { Router } from '@angular/router';
import { ProduitService } from './../../services/produit.service';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/produit';

import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitEmployeComponent implements OnInit {

  isUpdate: Boolean = false;

  private produit : Produit = {
    nom_produit : "",
    nom_court_produit : "",
    prix_base_produit : 1,
    prix_vente_produit : 1,
    seuil_max_remise_produit : 1,
    unite_produit: "",
    image_produit: "",
    quantite_initiale_stock: 1,
    quantite_actuel_stock : 1
  };

  
  constructor(private service: ProduitService, private router: Router,private authService: AuthService) {}

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
 
  goHome(){
    this.router.navigate(['']);
  }

  onClear() {
    this.service.initializeFormGroup();
    this.service.form.reset();
  }

  produits : Produit[] = [];

  onSubmit() {
    console.log(this.service.form.value);
    this.produit = this.service.form.value;
    this.service.update(this.produit).subscribe(produit => {
      console.log(produit);
      this.router.navigate(["/dashboardEmploye/produit"]);
    });
  }

  onAnuller() {
    this.router.navigate(["produit"]);
  }

  onUpdate() {
    if (this.isUpdate == true) {
      this.isUpdate = false;
    } else {
      this.isUpdate = true;
    }
  }

}
