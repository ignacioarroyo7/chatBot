import mongoose, {Schema} from "mongoose";

const especialistaSchema = new Schema({
    nombre:{
        type: String
    },
    apellido:{
        type: String
    } ,
    especialidad:{
        type: String
    }
})

const Especialista = mongoose.model('especialista',especialistaSchema);
module.exports= Especialista;