// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

app.use(bodyParser.json());
const app = express();

// Connect to MongoDB
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true });


// Middleware and routes setup
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/property', propertyRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
