import { ProduitService } from './services/produit.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './Dashboard/side-menu/side-menu.component';
import { ListProduitComponent } from './Produit/list-produit/list-produit.component';
import { AddProduitComponent } from './Produit/add-produit/add-produit.component';
import { UpdateProduitComponent } from './Produit/update-produit/update-produit.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { ListClientComponent } from './Client/list-client/list-client.component';
import { UpdateClientComponent } from './Client/update-client/update-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { UpdateProfilComponent } from './profil/update-profil/update-profil.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AddEmployeComponent } from './Employe/add-employe/add-employe.component';
import { ListEmployeComponent } from './Employe/list-employe/list-employe.component';
import { UpdateEmployeComponent } from './Employe/update-employe/update-employe.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { DashboardEmployeComponent } from './dashboard-employe/dashboard-employe.component';


import { ListProduitClientComponent } from './ProduitClient/list-produit/list-produit.component';
import { ListProduitEmployeComponent } from './ProduitEmploye/list-produit/list-produit.component';
import { AddProduitEmployeComponent } from './ProduitEmploye/add-produit/add-produit.component';
import { UpdateProduitEmployeComponent } from './ProduitEmploye/update-produit/update-produit.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ListePaniersPayesComponent } from './liste-paniers-payes/liste-paniers-payes.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ListProduitComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    AddClientComponent,
    ListClientComponent,
    UpdateClientComponent,
    ListProfilComponent,
    AddProfilComponent,
    UpdateProfilComponent,
    HomeComponent,
    ConnexionComponent,
    InscriptionComponent,
    AddEmployeComponent,
    ListEmployeComponent,
    UpdateEmployeComponent,
    DashboardClientComponent,
    DashboardEmployeComponent,
    ListProduitEmployeComponent,
    ListProduitClientComponent,
    AddProduitEmployeComponent,
    UpdateProduitEmployeComponent,
    PaiementComponent,
    ListePaniersPayesComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
