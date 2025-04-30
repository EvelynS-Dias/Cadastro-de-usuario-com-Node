import { v4 as uuidv4 } from "uuid";
import UserService from "../services/user.service.js";
import { Usuario } from "../model/usuario.js";


 
 class RegisterUserController { 
   static async RegisterUser(req,res, next) {
    const { nome , email } = req.body;

    if(!nome || !email ) {
        res.json({Message: "Por favor, insira todos os dados!"});
    }

    const emailExists = await UserService.seExisteEmail(email);

try { 
     if(emailExists) {
        res.status(500).json({Message: "Já existe alguém com esse e-mail!"})
    }
    
} catch(err) {
    console.log("Falha! " + err)
}

try { 
    const novoUsuario = new Usuario(nome,email)
    await UserService.insertUser(novoUsuario);
    res.status(200).json({Message: "Usuário inserido com sucesso!"})
}
catch(err) {
    console.log("Novo erro! "+ err);
}

}
}

export default RegisterUserController;