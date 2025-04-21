import {express} from "express";
import router from "./routes/cadastro.route";
const app = express(); 

app.use(express.json());

app.get("/", router ); 
