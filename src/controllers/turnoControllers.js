import Turno from "../models/turno"
const turnoCtrl={}

turnoCtrl.crearTurno = async (req,res)=>{
    res.send('creando turno...');
    try {
        const nuevoTurno = new Turno({
            fecha:req.body.fecha,
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            celular:req.body.celular,
            mail:req.body.mail,
        });
        await nuevoTurno.save();
        res.status(201).json({
            mensaje: 'Turno agregado correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al agregar un producto'
        })
    }
}

export default turnoCtrl