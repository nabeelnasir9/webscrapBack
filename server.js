const express = require('express');
const app = express();
const cors = require('cors');

// Add this after initializing your app
app.use(cors());

const PORT = 3001;

// Setup middleware
app.use(express.json());


// Routes
app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
