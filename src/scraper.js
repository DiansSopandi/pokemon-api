const axios = require('axios');
const cheerio = require('cheerio');
const Pokemon = require('./models/Pokemon');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

async function scrapePokemon() {
  const url = 'https://pokemondb.net/pokedex/all';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const pokemons = [];

  $('table#pokedex tbody tr').each((i, element) => {
    const name = $(element).find('td:nth-child(2) a').text().trim();
    const type = $(element).find('td:nth-child(3) a').map((i, el) => $(el).text()).get();
    const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${name.toLowerCase()}.png`;

    if (name) {
      pokemons.push({ name, type, imageUrl });
    }
  });

  await Pokemon.insertMany(pokemons, { ordered: false }).catch(err => console.log('Duplicates skipped'));
  console.log('Pokémon data scraped and stored!');
  mongoose.connection.close();
}

scrapePokemon();
