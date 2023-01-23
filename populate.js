require('dotenv').config();

const ConnectBD = require("./db/connect")
const product = require("./models/product")
const jsonProducts = require("./products.json")


const start = async()=>{
    try {
        await ConnectBD(process.env.MONGO_URL)
    } catch (error) {
        console.log(err)
    }
}