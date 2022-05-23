import mongoose from "mongoose";
const dotenv = require('dotenv');
dotenv.config({path:'.env'});

//const url ='mongodb://localhost:27017/chatbot';
const url = 'mongodb+srv://ignacioarroyo7:Blackxs1@cluster0.dltct.mongodb.net/turnos';
mongoose.connect(url)

const conectarBD = ()=>{
    const connection = mongoose.connection;
    connection.once('open',()=>{
        console.log('Bd conectada')
    })
     
}

module.exports=conectarBD;
