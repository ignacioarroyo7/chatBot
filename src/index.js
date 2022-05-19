import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'),()=>{
    console.log(`SERVER PORT: ${app.get('port')}`);
})