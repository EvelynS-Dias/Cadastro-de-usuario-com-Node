import { Session } from "inspector/promises";
import { DatabaseSync } from "node:sqlite";
import sqlite3 from "sqlite3";

const userDB = new DatabaseSync(':memory:') 

//CRIAR UMA NOVA TABELA
export default function createTable() { 
userDB().then(db => db.exec('CREATE TABLE user(id INTEGER PRIMARY KEY, nome TEXT, email TEXT) STRICT', (err) =>
    {  if(err) {
    return console.log("Houve um erro na criação do banco de dados!");
     }
    else {
    return console.log("Tabela criada com sucesso!")
    } }))
}

//CRIANDO UMA SESSÃO, UM LOG QUE VAI FICAR ARMAZENANDO TUDO QUE ESTIVER ACONTECENDO
const session = userDB.createSession();

//INSERIR NOVO USUÁRIO 
export default function insertUser(pessoa) {   
const novoUser = userDB.prepare('INSERT INTO user(nome,email) VALUE(?,?)');
novoUser.run(pessoa);
}


const changeset = session.changeset();
userDB.applyChangeset(changeset)

