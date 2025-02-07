import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../model/employe';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {

 produits : Employe[] = [];
   constructor(private produitService: EmployeService, private router: Router) { }
 
   listData = new MatTableDataSource<Employe>();
 
   displayedColumns: string[] = [
     "nom_employe",
     "nom_court_employe",
     "ville_employe",
     "Adresse_employe",
     "Tel_Fix_employe",
     "Tel_mobile_employe",
     "Fax_employe",
     "adresse_email_employe",
     "actions"
   ];
 
 
   @ViewChild(MatSort, { static: true }) sort: MatSort;
   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
   
   ngOnInit() {
     this.getProduit();
     this.listData.sort = this.sort;
     this.listData.paginator = this.paginator;
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
     this.router.navigate(["updateEmploye"]);
   }
 
   onDelete(id) {
     console.log(id);
     if (confirm("Voulez-vous vraiment supprimer?")) {
       this.delete(id);
     }
   }

}
