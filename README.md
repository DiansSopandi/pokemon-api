
# Pokémon Scraper API 

A **Node.js** API that scrapes Pokémon data, stores it in **MongoDB**, and provides a **JSON:API-compliant** RESTful API.

## 🚀 Features
✅ Scrapes Pokémon data from [Pokémon DB](https://pokemondb.net/)  
✅ Saves Pokémon data in **MongoDB**  
✅ Exposes a **JSON:API-compliant REST API**  

---

## 📌 Tech Stack
- **Node.js** (v20.18.0)
- **Express.js** (API framework)
- **Axios** (HTTP requests)
- **Cheerio** (Web scraping)
- **Mongoose** (MongoDB ORM)
- **dotenv** (Environment variables)
- **Nodemon** (Auto-restart for development)
- **Concurrently** (Run multiple processes)
- **Rimraf** (Cleanup for builds)


---

## 📂 Project Setup

1️⃣ Clone the Repository  
git clone https://github.com/DiansSopandi/pokemon-api.git

cd pokemon-api

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file and add:

MONGO_URI=mongodb://localhost:27017/pokemonDB

PORT=7000

4️⃣ Run the Scraper (To Populate the Database)

node src/scraper.js

5️⃣ Start the API Server

node src/index.js  
also you can start the server with these command below 

*)  npm run dev  
*)  npm run start

API Endpoints
GET /api/pokemon

Returns Pokémon data in JSON:API format.

Response Example:

{
  "data": [
    {
    "_id": {
        "$oid": "679d96d9b5206fb64b8401eb"
    },
    "name": "Bulbasaur",
    "type": [
        "Grass",
        "Poison"
    ],
    "imageUrl": "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
    "__v": 0
    }            
  ]
}


Development Notes:

Ensure MongoDB is running locally (mongod) or use MongoDB Atlas.
The scraper only runs once; run node scraper.js again if needed.