
 class RegisterUserController { 
   static RegisterUser(req,res) {
    const  {nome,email} = req.body;
    if(!nome || !email ) {
        res.json({Message: "Por favor, insira todos os dados!"});
    }
    else {
        res.json({Message: "Usuário cadastrado com sucesso"});
    }
}
}

export default RegisterUserController;