
var express = require('express');
var cors = require('cors');
var mysql = require('mysql');

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

server.get("/produtos", (req, res) => {
    connection.query("SELECT * FROM produto", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})



// server.post("/contatos", (req, res) => {
//     const {nome, mensagem} = req.body;
//     connection.query(`INSERT INTO comentarios(nome, mensagem) values ('${nome}, '${mensagem}')`, (error, result) => {
//         if (error) {
//             res.send("Erro ao inserir comentário")
//         } else {
//             res.status(201).json({
//                 "message" : "Comentario enviado"
//             })
//         }
//     })
// })

server.listen(3333, () =>{
    console.log("Servidor Ativo!")
});