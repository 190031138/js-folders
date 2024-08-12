const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();
require('./database/connection');
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRoute1 = require('./routers/player');

app.use('/api/v1', authRoute1);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
})