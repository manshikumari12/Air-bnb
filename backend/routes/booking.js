
const express = require('express');
const bookingRouter = express.Router();
const booking = require('../model/booking');

bookingRouter.post('/', async (req, res) => {
  try {
    const property = await booking.create(req.body);
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

bookingRouter.get('/', async (req, res) => {
  try {
    const properties = await booking.find().populate('booking');
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
bookingRouter.put('/:id', async (req, res) => {
    try {
      const updatedbooking = await booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedbooking);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  bookingRouter.delete('/:id', async (req, res) => {
    try {
      await booking.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


module.exports = {bookingRouter};