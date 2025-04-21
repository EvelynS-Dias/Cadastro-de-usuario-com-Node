import {express} from "express";
import router from "./routes/cadastro.route";
import {createTable}  from "./db/config"



const app = express(); 

app.use(express.json());

app.get("/", router ); 
