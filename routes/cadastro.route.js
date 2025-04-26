import {Router} from "express";
import RegisterUserController from "../controller/cadastro.controller.js"
import {createTable, insertUser} from "../db/config.js"

const router = Router();

router.get("/cadastro", (req,res ) => res.json("Bem-vindo ao sistema de cadastro"));
router.post("/cadastro", RegisterUserController.RegisterUser, insertUser);

export default router; 
