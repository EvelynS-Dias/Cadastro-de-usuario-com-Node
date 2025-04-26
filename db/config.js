import { Session } from "inspector/promises";
import { DatabaseSync } from "node:sqlite";
import express from "express";
import sqlite3 from "sqlite3";

const userDB = new sqlite3.Database(':memory:'); 


//CRIAR UMA NOVA TABELA
  export async function createTable()  {

    const query  = `CREATE TABLE
    user(id INTEGER PRIMARY KEY,
     nome TEXT NOT NULL ,
      email TEXT NOT NULL UNIQUE)STRICT`

    
      return new Promise((resolve, reject) => {
        userDB.run(query, function (err) {
          if (err) {
            console.log("Houve um erro na criação do banco de dados!");
            reject(err);  // Rejeita a Promise em caso de erro
          } else {
            console.log("Tabela criada com sucesso!");
            resolve();  // Resolve a Promise se tudo ocorrer bem
          }
        });
      });
    }
           


 export async function insertUser(req,res,next) {  
    try  { 
  const  { nome, email } = req.body;
  
  userDB.serialize(() =>  {
  const check = userDB.prepare('SELECT email FROM user where email = ?').get(email.toLowerCase());

  if(check) {
   return res.status(400).json("Esse email já está cadastrado! Por favor registre outro.")
  }
  
const novoUser = userDB.prepare('INSERT INTO user (nome,email) VALUES(?,?)') 
novoUser.run(nome,email.toLowerCase(), (err)=> {;
res.status(200).json("Usuário criado com sucesso!")
  }  

     ) 
    })}
    catch(err) {
        res.status(500).json("Houve uma falha na inserção de dados: ")
        reject("Erro na inserção do usuário: " + err); 

     }

    }


