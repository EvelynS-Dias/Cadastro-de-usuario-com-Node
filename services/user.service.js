import  {getDB} from "../database.js"
import { db } from "../database.js";
export default class UserService {
        static db = getDB();


    static async getUsers() {
        return allUsers = await db.all(`SELECT * FROM user`);
    }

   static async seExisteEmail(novoEmail) {  
    const check = await db.get('SELECT * FROM user WHERE email = ?', novoEmail.toLowerCase());
    if(check) {
        return true;
        }
        else { 
        return false;
        }
}

static async insertUser(novoUsuario) {

    const {id, nome, email} = novoUsuario; 

const novoUser = await db.prepare('INSERT INTO user (id,nome,email) VALUES(?, ?,?)') 
 await  novoUser.run(id,nome,email)
 return "Usuário criado com sucesso!"
  }
}
