// api.js
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const passport = require('passport');

// Define API endpoint to fetch all items
router.get('/api/items', async (req, res) => {
  try {
    // Query MongoDB database for all items
    const items = await Item.find().exec();
    // Return the items in JSON format
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch items' });
  }
});

// Define API endpoint to create a new item
router.post('/api/items', async (req, res) => {
  try {
    // Validate the input data
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required()
    });
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      res.status(400).json({ message: 'Invalid input data' });
      return;
    }

    // Create a new item
    const item = new Item(req.body);
    await item.save();
    // Return the created item in JSON format
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create item' });
  }
});

// Define API endpoint to update an item
router.put('/api/items/:id', async (req, res) => {
  try {
    // Validate the input data
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required()
    });
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      res.status(400).json({ message: 'Invalid input data' });
      return;
    }

    // Find the item to update
    const item = await Item.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    // Update the item
    item.name = req.body.name;
    item.description = req.body.description;
    item.price = req.body.price;
    await item.save();
    // Return the updated item in JSON format
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update item' });
  }
});

// Define API endpoint to delete an item
router.delete('/api/items/:id', async (req, res) => {
  try {
    // Find the item to delete
    const item = await Item.findById(req.params.id);
    if (!item) {
      res.status(404).json({ message: 'Item not found' });
      return;
    }
    // Delete the item
    await item.remove();
    // Return a success message
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete item' });
  }
});

// Implement authentication and authorization
router.use(passport.initialize());
router.use(passport.session());

module.exports = router;