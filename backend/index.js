const express = require('express')
require("dotenv").config()
const {connection}=require("./config/db")
const {hostRoutes}=require("./routes/host")
const {propertyRouter} = require('./routes/property');
const {gueatRouter} = require('./routes/guest');
const {bookingRouter} = require('./routes/booking');
const app=express()

const cors = require('cors')


app.use(cors()); 
app.use(express.json())

app.use('/hosts', hostRoutes);
app.use('/properties', propertyRouter);
app.use('/guests', gueatRouter);
app.use('/bookings', bookingRouter);






app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to mongoose")
    }catch(err){
console.log(err)
    }
    console.log(`server running to ${process.env.port}`)
})