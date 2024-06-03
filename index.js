require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const crypto = require('crypto');
const { createProduct } = require('./controller/Product');


//middlewares

server.use(express.json()); // to parse req.body

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
}


server.get('/', (req, res) => {
  res.json({status : 'ok'});
})

server.post('/products',createProduct);

server.get('/', (req, res) => {
  res.json({status : 'ok'});
})

server.get('/', (req, res) => {
  res.json({status : 'ok'});
})

server.listen(process.env.PORT, () => { 
  console.log('server started');
});
