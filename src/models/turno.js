import mongoose, {Schema} from "mongoose";

const turnoSchema = new Schema({
    fecha : {
        type:String,
        unique: true
    },
    nombre: {
        type:String
    },
    apellido: {
        type:String
    },
    celular: {
        type:String
    },
    mail: {
        type: String
    },
    especialidad:{
        type:String
    }
})

const Turno = mongoose.model('turno',turnoSchema)
module.exports = Turno;