const mongoose = require('mongoose');

// Definining  the MongoDB connection URI with actual database URI.
<<<<<<< HEAD
const mongoURI = 'mongodb+srv://itodoemmanuelitodo:<Velocity400>@cluster0.71nirhd.mongodb.net/?retryWrites=true&w=majority'
=======
const mongoURI = 'mongodb+srv://itodoemmanuelitodo:Velocity400@cluster0.71nirhd.mongodb.net/?retryWrites=true&w=majority'
>>>>>>> 1a1833752f8389e6f440736e8b0dbb6306f9b473
// Connect to the MongoDB database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Get the default connection
const db = mongoose.connection;

// Handle MongoDB connection events
db.on('connected', () => {
  console.log(`Connected to MongoDB at ${mongoURI}`);
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Exporting  mongoose instance to use in other parts of the application
module.exports = mongoose;

 
