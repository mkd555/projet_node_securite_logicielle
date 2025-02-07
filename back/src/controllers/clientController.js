import sequelize from "../config/sequelize.js";
import ClientModel from "../models/clientModel.js";
import commandeModel from "../models/commandeModel.js";
import CommandeModel from "../models/commandeModel.js";
import {format} from "date-fns"

const Client = sequelize.models.Client
const Commande = commandeModel(sequelize)

//Get all client
export const getClient = (req, res) => {
  Client.findAll()
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

//Get client by ID
export const getClientByID = (req, res) => {
  const id = req.params.id;
  Client.findByPk(id)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

//Update client
export const updateClient = (req, res) => {
  const idCl = req.params.id;
  const newClient = req.body;
  Client.update(newClient, { where: { id: idCl } })
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

//Delete client
export const deleteClient = (req, res) => {
  // const idCl = req.params.id;
  Client.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({"message":"Client Supprimer avec success"});
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

//Get client commande 
export const  getClientCommande = async (req,res) =>{
 /* try{
    const clientId = req.params.id
    const  clientcom = await sequelize.query(
      'SELECT * ' +
      'FROM clients as c , commandes as com' +
      ' WHERE com.clientId = c.id AND c.id =:clientId ',
      {
        replacements: { clientId },
        type: sequelize.QueryTypes.SELECT,
      }
  );
    res.status(200).json(clientcom)
  }catch(error){ 
    res.status(404).json({error:error.message})
  }*/
    try{
    const clientcom = await Client.findAll({
      where: {id: req.params.id  },
      include: {
        model:Commande,
        as: "commandes", 
      }})
    res.status(203).json({clientcom });
  }catch(error){
    res.status(500).json({ message: `Erreur serveur : ${error.message}` });
  }

}

//Client order 
export const makeanorder = (req,res) =>{
  const datecom =  format(Date(), 'yyyy-MM-dd HH:mm:ss')
  console.log(datecom)
  Commande.create({
    dateCommande:datecom,
    clientId: req.params.id
  })
  .then((com)=>{
    res.status(203).json(com)
  }).catch((error)=>{
    res.status(400).json(error)
  })
 
}
