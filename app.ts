import express from "express";
import mongoose from "mongoose";
import router from "./routes";

mongoose.connect("mongodb://127.0.0.1:27017/guitarra");

const database = mongoose.connection;

database.once("connected", () => {
  console.log("Banco conectado.");
});

database.on("error", (error) => {
  console.error("Ocorrµeu um erro: ", error);
});

const app = express();


app.use(express.json());

app.use(router)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.')
})



