require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const PORT = process.env.PORT || 7000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api/pokemon', pokemonRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
