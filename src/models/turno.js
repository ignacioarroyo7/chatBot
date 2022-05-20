import mongoose, {Schema} from "mongoose";

const turnoSchema = new Schema({
    fecha : {
        type:string
    },
    nombre: {
        type:string
    },
    apellido: {
        type:string
    },
    celular: {
        type: string
    },
})

const Turno = mongoose.model('turno',turnoSchema)
export default Turno;