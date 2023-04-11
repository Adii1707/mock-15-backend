const express = require("express");
const { connection } = require("./config/db");
const { postRoute } = require("./routes/postroute");
const { getRoute } = require("./routes/getroute");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors())

app.use("/", getRoute)
app.use("/", postRoute)

app.listen(process.env.PORT, async ()=>{
    try {
         await connection
         console.log("Connected to db")
    } catch (error) {
        console.log(error)

    }
    console.log(`server is running in port ${process.env.PORT}`)
})