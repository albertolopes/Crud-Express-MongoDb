import express from 'express';
import mongoose from "mongoose";

import {studentRouter} from './routes/studentRouter.js';

(async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://alberto:<Senha>@cluster0.2mruf.mongodb.net/<BaseDeDados>?retryWrites=true&w=majority",
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Conectado ao MongoDB com sucesso');
    }catch(error){
        console.log('Erro ao conectar ao MongoDB');
    }
})();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API iniciada'));