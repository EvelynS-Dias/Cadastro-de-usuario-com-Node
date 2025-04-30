import {Router} from "express";
import RegisterUserController from "../controller/cadastro.controller.js"
import { fsync } from "fs";

const router = Router();


router.get("/cadastro", (req,res ) => res.json({message: "Bem-vindo ao sistema de cadastro"}));
router.post("/cadastro", RegisterUserController.RegisterUser);

export default router; 
