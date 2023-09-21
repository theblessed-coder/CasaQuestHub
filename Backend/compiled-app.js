#!/usr/bin/env node
// app.js
"use strict";

const express = require('express');
const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const app = express();

// Connect to MongoDB
mongoose.connect(config.db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Routes and other application logic

app.use('/auth', authRoutes);
app.use('/property', propertyRoutes);
const httpsOptions = {
  key: fs.readFileSync('path/to/your/private-key.pem'),
  cert: fs.readFileSync('path/to/your/certificate.pem')
};

// Create HTTPS server
const httpsServer = https.createServer(httpsOptions, app);
const PORT = process.env.PORT || 3000;
httpsServer.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
