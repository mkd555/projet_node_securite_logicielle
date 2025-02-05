import Client from "../models/clientModel.js";

export const addClient = (req, res) => {
  Client.create(req.body)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
};
export const getClient = (req, res) => {
  Client.findAll()
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};
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
