require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const crypto = require('crypto');


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
}

server.listen(process.env.PORT, () => {
  console.log('server started');
});
