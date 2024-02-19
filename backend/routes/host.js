// routes/host.js
const express = require('express');
const hostRoutes = express.Router();
const Host = require('../model/host');


hostRoutes.post('/add', async (req, res) => {
  try {
    const host = await Host.create(req.body);
    res.status(201).json(host);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

hostRoutes.get('/', async (req, res) => {
  try {
    const hosts = await Host.find();
    res.status(200).json(hosts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
hostRoutes.put('/:id', async (req, res) => {
  try {
    const updatedHost = await Host.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedHost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

hostRoutes.delete('/:id', async (req, res) => {
  try {
    await Host.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = {hostRoutes}
