import { Employe } from '../model/employe';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private url = "http://localhost:3000/employe";

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nom_employe: new FormControl("", Validators.required),
    nom_court_employe: new FormControl("", Validators.required),
    ville_employe: new FormControl("", Validators.required),
    Adresse_employe: new FormControl("", Validators.required),
    Tel_Fix_employe: new FormControl("", Validators.required),
    Tel_mobile_employe: new FormControl("", Validators.required),
    Fax_employe: new FormControl("", Validators.required),
    adresse_email_employe: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      nom_employe : "",
      nom_court_employe : "",
      ville_employe : "",
      Adresse_employe : "",
      Tel_Fix_employe : "",
      Tel_mobile_employe: "",
      Fax_employe: "",
      adresse_email_employe: ""
    });
  }

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Employe[]>(this.url);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }


  add(employe) {
    return this.http.post<Employe>(this.url, employe);
  }

  update(employe) {
    return this.http.put(`${this.url}/${employe.id}`, employe);
  }

  populateform(row) {
    this.form.setValue(row);
  }
  
}
