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

const router = require('./routers/route');
app.use('/api', router);


app.listen(port, () =>{
    console.log(`The server is running on port http://localhost:${port}`)

})