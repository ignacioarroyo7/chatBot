import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'),()=>{
    console.log(`SERVER PORT: ${app.get('port')}`);
});

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('hola back')
});
  