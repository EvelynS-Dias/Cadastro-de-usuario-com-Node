import { DatabaseSync } from "node:sqlite";
import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite"; //Abre o arquivo no sistema 
import fs from "fs";
import UserService from "./services/user.service.js"

let db 

async function initDb() { 
    db = await open ({
      filename: "./db/banco.db", //Abre o arquivo com o caminho
      driver: sqlite3.Database, //Qual o driver que vamos usar para ler, escrever, deçetar
    });
  } 
  
   function getDB() { // função para expor o banco de dado s para nossa aplicação
  if(!db) {
    logEvents("Banco de dados não foi inicializado", "data_base.log") // registrar os erros
  }
  return db 
  }
  
    async function createTable() { 
  
    await db.exec(`CREATE TABLE IF NOT EXISTS 
          user(id TEXT PRIMARY KEY,
           nome TEXT NOT NULL ,
            email TEXT NOT NULL UNIQUE) STRICT`) 
  
  }

  export { initDb, getDB, createTable}