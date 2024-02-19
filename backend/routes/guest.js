
const express = require('express');
const gueatRouter = express.Router();
const guest = require('../model/guest');

gueatRouter.post('/', async (req, res) => {
  try {
    const property = await guest.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

gueatRouter.get('/', async (req, res) => {
  try {
    const properties = await guest.find().populate('guest');
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
gueatRouter.put('/:id', async (req, res) => {
    try {
      const updatedguest = await guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedguest);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  gueatRouter.delete('/:id', async (req, res) => {
    try {
      await guest.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


module.exports = {gueatRouter};