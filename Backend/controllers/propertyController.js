// Importing neccessary modules
const Property = require('../models/property');

// Defining controller methods

// Get all properties
export async function getAllProperties(_req, res) {
  try {
    const properties = await find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties from CasaQuestHub', error: error.message });
  }
}

// Get a single property by ID
export async function getPropertyById(req, res) {
  const { id } = req.params;
  try {
    const property = await findById(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found CasaQuestHub' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching property fro CasaQuestHub', error: error.message });
  }
}

// Create a new property
export async function createProperty(req, res) {
  const { title, description, price } = req.body;
  try {
    const property = new Property({
      title,
      description,
      price,
    });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ message: 'Error creating property on CasaQuestHub', error: error.message });
  }
}

// Update an existing property by ID
export async function updateProperty(req, res) {
  const { id } = req.params;
  const { title, description, price } = req.body;
  try {
    const property = await findByIdAndUpdate(
      id,
      { title, description, price },
      { new: true }
    );
    if (!property) {
      return res.status(404).json({ message: 'Property not found on CasaQuestHub' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: 'Error updating property on CasaQuestHub', error: error.message });
  }
}

// Delete a property by ID
export async function deleteProperty(req, res) {
  const { id } = req.params;
  try {
    const property = await findByIdAndRemove(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found on CasaQuestHub' });
    }
    res.json({ message: 'Property deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting property', error: error.message });
  }
}

