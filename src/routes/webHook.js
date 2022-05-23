import { Router } from "express";
import turnoCtrl from "../controllers/turnoControllers";
const router = Router();

router.post('/webhook', async (req,res)=>{
    const tag = req.body.fulfillmentInfo.tag;
    switch (tag) {
        case value:
            
            break;
        case value:
            
            break;
        case value:
            
            break;
    
        default:
            break;
    }

});