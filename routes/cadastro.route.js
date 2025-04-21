import {Router} from "express";
import RegisterUserController from "../controller/cadastro.controller"; 

const router = Router();

router.get("/cadastro", (req,res ) => res.json("Bem-vindo ao sistema de cadastro"));
router.post("/cadastro", RegisterUserController.RegisterUser());

export default router; 
