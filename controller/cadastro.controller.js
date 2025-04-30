import { v4 as uuid } from "uuid";
import UserService from "../services/user.service.js";

 
 
 class RegisterUserController { 
   static RegisterUser(req,res, next) {
    const  {nome,email} = req.body;
    if(!nome || !email ) {
        res.json({Message: "Por favor, insira todos os dados!"});
    }
    else {
        res.json({Message: "Usuário cadastrado com sucesso"});
    }
    next();
}
}

export default RegisterUserController;