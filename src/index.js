import express from "express";
import morgan from "morgan";
import cors from "cors";
const Especialista = require('./models/especialista');
const Turno = require('./models/turno');
const DataBase = require('./database');


const app = express();
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'),()=>{
    console.log(`SERVER PORT: ${app.get('port')}`);
});

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DataBase();

app.post('/',async (req,res)=>{
    console.log(req.body);
    const tag = req.body.fulfillmentInfo.tag;
    console.log(req.body.sessionInfo.parameters)
    switch (tag) {
        case 'confirmar_turno':
            try {

            let dia=req.body.sessionInfo.parameters['dia'].day;
            let mes=req.body.sessionInfo.parameters['dia'].month;
            let anio=req.body.sessionInfo.parameters['dia'].year;
            let hora=req.body.sessionInfo.parameters['dia'].hours;
            let min=req.body.sessionInfo.parameters['dia'].minutes;
        await Turno.create({
                    fecha:formatearFecha(dia,mes,anio,hora,min),
                    nombre: req.body.sessionInfo.parameters['nombre'],
                    apellido: req.body.sessionInfo.parameters['apellido'],
                    celular: req.body.sessionInfo.parameters['celular'],
                    mail: req.body.sessionInfo.parameters['mail'],
                    especialidad: req.body.sessionInfo.parameters['especialidad']
                  });
                  res.status(200).send({
                    sessionInfo: {
                        parameters: {
                          estado: "Exito"
                        }
                      }
                  });
            } catch (error) {
                res.status(200).send({
                    sessionInfo: {
                        parameters: {
                          estado: "Error"
                        }
                      },
                    fulfillment_response: {
                      messages: [
                        {
                          text: {
                            text: ["Ya existe un turno con la fecha solicitada"],
                          },
                        },
                      ],
                    }   
            })}
            
            break;
            case 'listar_especialistas':
                let msg = `Los especialistas son:\n`
                    let especialista = await Especialista.find();
                    especialista.forEach((especialista) => {
                        msg+=especialista.especialidad+":"+ especialista.nombre+" "+ especialista.apellido +"\n"
                      });
                      res.status(200).send({
                        fulfillment_response: {
                          messages: [
                            {
                              text: {
                                text: [msg],
                              },
                            },
                          ],
                        }   
                })
        default:
            break;
    }
      
    //res.send('hola back')
    // await Turno.create({
    //     fecha:"23/05/2022",
    //     nombre: "Arroyo",
    //     apellido: "Ignacio",
    //     celular: '3563477412',
    //     mail: 'assad@gmail.com',
    //     especialidad: 'urologo'
    //   });
    // await Especialista.create({
    //     nombre: 'Oscar',
    //     apellido: 'Retes',
    //     especialidad: 'Urologo'
    // })
    
      
});
const formatearFecha = (dia,mes,anio,hora,min) => {
    let fechaFinal = dia +"/" + mes  +"/" + anio +" "+ hora + ":" + min;
    console.log(fechaFinal);
    return fechaFinal;
}



  