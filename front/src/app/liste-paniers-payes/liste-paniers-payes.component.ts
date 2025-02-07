import { Component, OnInit } from '@angular/core';

interface Panier {
  id: number;
  produit: string;
  image: string;
  quantite: number;
  prixUnitaire: number;
  total: number;
}

@Component({
  selector: 'app-liste-paniers-payes',
  templateUrl: './liste-paniers-payes.component.html',
  styleUrls: ['./liste-paniers-payes.component.css']
})
export class ListePaniersPayesComponent implements OnInit {

  paniersPayes: Panier[] = [
    { id: 1, produit: 'Produit 1', image: 'assets/img/produit1.jpg', quantite: 2, prixUnitaire: 5000, total: 10000 },
    { id: 2, produit: 'Produit 2', image: 'assets/img/produit2.jpg', quantite: 1, prixUnitaire: 8000, total: 8000 }
  ];

  constructor() {}

  totalPaye: number = 0;

ngOnInit() {
  this.totalPaye = this.paniersPayes.reduce((acc, p) => acc + p.total, 0);
}

}
