// importação

import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

// atribuição

const server = express();

// configuração

server.use(express.json());
server.use(cors())

// conexão BD

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstackeletro"
})

server.get("/contatos", (req, res) => {
    connection.query("SELECT * FROM comentarios", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

server.post("/contatos", (req, res) => {
    const {nome, mensagem} = req.body;
    connection.query(`INSERT INTO comentarios(nome, mensagem) values ('${nome}, '${mensagem}')`, (error, result) => {
        if (error) {
            res.send("Erro ao inserir comentário")
        } else {
            res.status(201).json({
                "message" : "Comentario enviado"
            })
        }
    })
})

server.listen(3000);