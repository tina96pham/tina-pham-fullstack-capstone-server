const express= require("express");
require('dotenv').config();
const cors = require('cors');
const app=express()
const PORT = process.env.PORT || 8080;

const wasteInfo = require('./src/routes/info.js');
const wastelog = require('./src/routes/wastelog');

app.use(express.json());
app.use(cors());
app.use('/api/info', wasteInfo);
app.use('/api/wastelog', wastelog)

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})