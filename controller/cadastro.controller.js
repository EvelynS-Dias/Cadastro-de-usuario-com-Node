
 class RegisterUserController { 
   static RegisterUser(req,res) {
    const  {username,email} = req.body;
    if(!username || !email ) {
        res.json({Message: "Por favor, insira todos os dados!"});
    }
    else {
        res.json({Message: "Usuário cadastrado com sucesso"});
    }
}
}

export default RegisterUserController;