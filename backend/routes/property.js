// routes/property.js
const express = require('express');
const propertyRouter = express.Router();
const Property = require('../model/property');
const property = require('../model/property');

propertyRouter.post('/', async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

propertyRouter.get('/', async (req, res) => {
  try {
    const properties = await Property.find().populate('property');
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

propertyRouter.put('/:id', async (req, res) => {
    try {
      const updatedproperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedproperty);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  propertyRouter.delete('/:id', async (req, res) => {
    try {
      await Property.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = {propertyRouter};
