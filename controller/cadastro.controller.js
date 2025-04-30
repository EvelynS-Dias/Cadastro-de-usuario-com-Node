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
    console.log("Houve um erro inesperado no banco de dados: " + err)
}

try { 
    const novoUsuario = new Usuario(nome,email)
    await UserService.insertUser(novoUsuario);
    res.status(200).json({Message: "Usuário inserido com sucesso!"})
}
catch(err) {
    console.log("Aconteceu um erro na inserção do usuário no banco de dados: "+ err);
}

}
}

export default RegisterUserController;