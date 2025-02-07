import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { UpdateEmployeComponent } from './Employe/update-employe/update-employe.component';
import { AddEmployeComponent } from './Employe/add-employe/add-employe.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { ListClientComponent } from './Client/list-client/list-client.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { ListProduitClientComponent } from './ProduitClient/list-produit/list-produit.component';
import { ListProduitEmployeComponent } from './ProduitEmploye/list-produit/list-produit.component';
import { UpdateProduitEmployeComponent } from './ProduitEmploye/update-produit/update-produit.component';
import { AddProduitEmployeComponent } from './ProduitEmploye/add-produit/add-produit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployeComponent } from './Employe/list-employe/list-employe.component';
import { UpdateClientComponent } from './Client/update-client/update-client.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PaiementComponent } from './paiement/paiement.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardEmployeComponent } from './dashboard-employe/dashboard-employe.component';
import { ListePaniersPayesComponent } from './liste-paniers-payes/liste-paniers-payes.component';

const routes: Routes = [

  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: '', 
  component: HomeComponent  },
  { path: 'produit', 
  component: ListProduitComponent },
  { path: 'addProdiut', 
  component: AddProduitComponent },
  { path: 'updateProdiut', 
  component: UpdateProduitComponent },

  { path: 'dashboardEmploye/produit', 
    component: ListProduitEmployeComponent },
    { path: 'dashboardEmploye/addProdiut', 
    component: AddProduitEmployeComponent },
    { path: 'dashboardEmploye/updateProdiut', 
    component: UpdateProduitEmployeComponent },


    { path: 'dashboardClient/produit', 
      component: ListProduitClientComponent },
      { path: 'dashboardClient/paiement', 
        component: PaiementComponent },

        { path: 'paiement', 
          component: ListePaniersPayesComponent },
  { path: 'employe', 
  component: ListEmployeComponent },
  { path: 'addEmploye', 
  component: AddEmployeComponent },
  { path: 'updateEmploye', 
  component: UpdateEmployeComponent },
  { path: 'client', 
  component: ListClientComponent },
  { path: 'addClient', 
  component: AddClientComponent },
  { path: 'updateClient', 
  component: UpdateClientComponent },
  { path: 'profil', 
  component: ListProfilComponent },
  { path: 'addProfil', 
  component: AddProfilComponent },
  { path: 'updateProfil', 
  component: UpdateProfilComponent },
  { path: 'dashboardClient', 
    component: DashboardClientComponent },
    { path: 'dashboardEmploye', 
      component: DashboardEmployeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  { }
