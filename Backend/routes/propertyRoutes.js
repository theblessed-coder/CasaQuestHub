// routes/propertyRoutes.js
import { Router } from 'express';
const router = Router();
import Property, { find } from '../models/property';

// Upload a property (authentication required)
router.post('/upload-property', async (req, res) => {
    // Check authentication with the JWT token

    try {
        const property = new Property(req.body);
        await property.save();
        res.status(201).json({ message: 'Property uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error uploading property' });
    }
});

// Search for properties
router.get('/search', async (req, res) => {
    const { location, company } = req.query;

    try {
        const matchingProperties = await find({
            location: location,
            area: area,
            price: price,
            // Add search criteria as needed here
        });

        res.json(matchingProperties);
    } catch (error) {
        res.status(500).json({ error: 'Error searching for properties' });
    }
});

export default router;
