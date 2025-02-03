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
