const mongoose = require("mongoose");

const connect = () => {
  // Replace 'your-mongodb-connection-string' with your actual MongoDB connection string
  const connectionString = 'mongodb+srv://ravi:dingutaka@raviteja.9z9ger1.mongodb.net/demo?retryWrites=true&w=majority&appName=raviteja';

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((res) => {
    console.log(`MongoDB connected successfully on host ${res.connection.host}`);
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
};

module.exports = connect;
