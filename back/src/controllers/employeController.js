import Employe from "../models/employeModel.js";
import Produit from "../models/produitModel.js";


//Add Employe
export const addEmploye = (req, res) => {
  Employe.create(req.body)
    .then((client) => {
      res.status(204).json(client);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
};
//Get all Employe
export const getEmploye = (req, res) => {
    Employe.findAll()
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

//Get Employe by Id
export const getEmployeByID = (req, res) => {
  const id = req.params.id;
  Employe.findByPk(id)
    .then((employe) => {
      res.status(200).json(employe);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};
//Delete Employe
export const deleteEmploye = (req,res) =>{
    Employe.findByPk(req.params.id)
    .then((employe)=>{
      employe.destroy()
      res.status(200).json({"message":"Employe delected successfully"})
    }).catch((err) =>{
        res.status(404).json({ error: err.message });
    })
}
// Update Employe
 export const updateEmploye = (req,res) =>{
  Employe.findByPk(req.params.id)
    .then((employe)=>{
      employe.update({
        nom:req.body.nom,
        prenom:req.body.prenom,
        adresse : req.body.adresse,
        telephone : req.body.telephone
      })
      res.status(200).json({"message":"Employe updated successfully"})
    }).catch((err) =>{
        res.status(404).json({ error: err.message });
    })
 }

//Add Produit
export const addProduit = (req, res) => {
    Produit.create(req.body)
      .then((prod) => {
        res.status(204).json(prod);
      })
      .catch((err) => {
        res.status(404).json({ error: err.message });
      });
  };

//Get all Produit
export const getproduit = (req,res) =>{
    Produit.findAll().then((produit)=>{
        res.status(200).json(produit)
    }).catch((err) => {
        res.status(404).json({ error: err.message });
      })
}

//Get One produit
export const getProduitByID = (req,res) =>{
    Produit.findByPk(req.params.id)
    .then((prod)=>{
        res.status(200).json(prod)
    }).catch((err) =>{
        res.status(404).json({ error: err.message });
    })
}

//Delete Produit
export const deleteProduit = (req,res) =>{
    Produit.findByPk(req.params.id)
    .then((prod)=>{
        prod.destroy()
        res.status(200).json({"message":"Produit delected successfully"})
    }).catch((err) =>{
        res.status(404).json({ error: err.message });
    })
}