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
      res.status(404).send(error);
    });
};
export const getClientByID = (req, res) => {
  const id = req.params.id;
  Client.findByPk(id)
    .then((client) => {
      res.status(200).json(client);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};
