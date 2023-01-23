require('dotenv').config();
require("express-async-errors");
//async error

const express = require('express');
const app = express();

//ConnectBD

const ConnectBD = require("./db/connect")
const productRouter = require("./routes/products")


const notFoundMiddleware = require('./middleware/not-found');
const ErrorMiddleware = require('./middleware/error-handler');

//middleware 

app.use(express.json())

// route

app.get("/", (req, res)=>{
    res.send('<h1>Store bb</h1><a href="/api/v1/products">products root</a>')
})
app.use('/api/v1/products', productRouter)
// products route
app.use(notFoundMiddleware)
app.use(ErrorMiddleware)

const PORT = process.env.PORT || 3000;
const start = async ()=>{
    try {
        //connect DB
        await ConnectBD(process.env.MONGO_URL)
        app.listen(PORT, console.log(`the server working on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start();