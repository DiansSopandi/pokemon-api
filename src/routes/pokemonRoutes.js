const express = require('express');
const Pokemon = require('../models/Pokemon');

const router = express.Router();

// JSON:API-compliant endpoint
router.get('/', async (req, res) => {
  const pokemons = await Pokemon.find();
  res.json({
    data: pokemons.map(pokemon => ({
      type: 'pokemon',
      id: pokemon._id,
      attributes: {
        name: pokemon.name,
        type: pokemon.type,
        imageUrl: pokemon.imageUrl
      }
    }))
  });
});

module.exports = router;
