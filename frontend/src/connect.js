
const mongoose = require('mongoose');

// Replace with your MongoDB Atlas connection string (see next step)
const connectionString = 'mongodb+srv://ravi:dingutaka@raviteja.9z9ger1.mongodb.net/demo?retryWrites=true&w=majority&appName=raviteja';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(error => console.error('Error connecting to MongoDB Atlas:', error));

// Your server logic here (e.g., Express.js app)

const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// ... (your server code)

app.listen(port, () => console.log(`Server listening on port ${port}`));