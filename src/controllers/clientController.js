import Client from "../models/clientModel.js";

//Add client
export const addClient = (req, res) => {
  Client.create(req.body)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
};

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
export const getClientCommande = (req,res) =>{
  Client.findOne({
    where: {id: req.params.id  },
    include: {
      model: Commande,
      as: "commandes", 
    },
  }).then((clientcom)=>{
    res.status(200).json(clientcom)
  }).catch((error)=>{
    res.status(404).json(error)
  })
}