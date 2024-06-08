const express= require("express");
require('dotenv').config();
const cors = require('cors');
const app=express()
const PORT = process.env.PORT || 8080;

const wastes = require('./src/routes/wastes.js');
const products = require('./src/routes/products.js');
const goals = require('./src/routes/goals.js');
const records = require('./src/routes/records.js');

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/api/wastes', wastes);
app.use('/api/products', products);
// app.use('/api/goals', goals);
app.use('/api/records', records);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})