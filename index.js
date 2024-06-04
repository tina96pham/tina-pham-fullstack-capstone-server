const express= require("express");
require('dotenv').config();
const cors = require('cors');
const app=express()
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})