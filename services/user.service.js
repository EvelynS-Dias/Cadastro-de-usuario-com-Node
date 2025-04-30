import  {getDB} from "../database.js"

export default class UserService {

    async getUsers() {
        const db = getDb();
        return allUsers = db.all(`SELECT * FROM user`);
    }

   async  insertUser(novoUsuario, novoEmail) {  
        const check = await  db.prepare('SELECT * FROM user WHERE email = ?').get();
        check.exec(novoEmail)
        if(check) {
        return res.status(500).json({message:"Esse email já está cadastrado! Por favor registre outro."});
        }
      
      const novoUser = await db.prepare('INSERT INTO user (nome,email) VALUES(?,?)') 
      novoUser.run(novoUsuario,novoEmail.toLowerCase())
       return  res.status(200).json("Usuário criado com sucesso!")
        }
}