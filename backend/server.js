const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const axios = require('axios');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./db/db');
const bodyParser = require('body-parser');
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/user" , userRoutes )
// const openaiKey = process.env.OPENAI_API_KEY;
// app.get("/" , (req , res) =>{
//    res.send("Wasi MERN Stack Developer")
// })

const port = process.env.PORT || 5000;

app.listen(port , () =>{
    console.log(`server is running on port no ${port}`);
})