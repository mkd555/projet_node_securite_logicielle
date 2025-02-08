import { Produit } from './../../model/produit';
import { ProduitService } from './../../services/produit.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service'; 

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitEmployeComponent implements OnInit {

  produits : Produit[] = [];
  constructor(private produitService: ProduitService, private router: Router,private authService: AuthService) { }

  listData = new MatTableDataSource<Produit>();

  displayedColumns: string[] = [
    "nom_produit",
    "nom_court_produit",
    "prix_base_produit",
    "prix_vente_produit",
    "seuil_max_remise_produit",
    "unite_produit",
    "quantite_initiale_stock",
    "quantite_actuel_stock",
    "actions"
  ];


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  ngOnInit() {
    this.getProduit();
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
  }

  logout() {
    this.authService.logout();
  }
 
  goHome(){
    this.router.navigate(['']);
  }

  getProduit(){
    this.produitService.findAll().subscribe(res => {
      if (!res) return;
      console.log(res);
      this.listData = new MatTableDataSource(res as any);
    });
  }

  applyFilter(filterValue: string) {
    this.listData.filter = filterValue.trim().toLowerCase();
  }


  delete(id) {
    this.produitService.delete(id).subscribe(() => {
      this.produits = this.produits.filter(
        produit => produit.id != id
      );
      console.log(this.produits);
      this.getProduit();
    });
  }

  onEdit(row) {
    console.log(row);
    this.produitService.populateform(row);
    this.router.navigate(["/dashboardEmploye/updateProdiut"]);
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Voulez-vous vraiment supprimer?")) {
      this.delete(id);
    }
  }

}
