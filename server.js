import express from "express";
import router from "./routes/cadastro.route.js"
import UserService from "./services/user.service.js"
import { initDb, createTable } from "./database.js";

await initDb(); // Começar a rodar primeiro o banco pra depois inicializar o servidor.
await createTable();

const app = express(); 
const PORT = 3000;

app.use(express.json());
app.use("/", router ); 

async function servidor (){ 

app.listen(PORT, () => { 
console.log(`Servidor rodando na porta ${PORT}`) }
);
}

servidor();