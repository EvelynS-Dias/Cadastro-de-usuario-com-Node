import express from "express";
import router from "./routes/cadastro.route.js"
import {createTable}  from "./db/config.js"


const app = express(); 
const PORT = 3000;

app.use(express.json());
app.use("/", router ); 

async function servidor (){ 

await createTable()
app.listen(PORT, () => { 
console.log(`Servidor rodando na porta ${PORT}`) }
);
}

servidor();