const app = require('../config/servidor')
const conn = require('../config/conexao')
const Mensagem = require('../sendMensagem/mensagem')

var express = require('express');
var cors = require('cors');
// var mysql = require('mysql');

// atribuição

const server = express();

// configuração

server.use(express.json());
server.use(cors())

// conexão BD

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "fullstackeletro"
// })

// server.get("/produtos", (req, res) => {
//     connection.query("SELECT * FROM produto", (error, result) => {
//         if (error) {
//             res.send(error)
//         } else {
//             res.send(result)
//         }
//     })
// })

// Inserção de dados Mongoose
app.post('/contatos', async (req, res) => {
    const novoComentario = new Mensagem({
      nome : req.body.nome,
      mensagem : req.body.mensagem
    })

    novoComentario.save()

    return res.json({
      informativo : "mensagem cadastrada com sucesso!",
      detalhes : novoComentario
    })
    // const { nome, mensagem } = req.body;
  
    // let resultado = await mensagem.create({ nome, mensagem, });
    //  res.json(resultado);
  });

app.get("/contatos", async (req, res) => {
      const comentarioResposta = await Mensagem.find();

      const comentarioJson = await comentarioResposta

      return res.json(comentarioJson)

      
    // const {nome, mensagem} = req.body;
    // connection.query(`INSERT INTO comentarios(nome, mensagem) values ('${nome}, '${mensagem}')`, (error, result) => {
    //     if (error) {
    //         res.send("Erro ao inserir comentário")
    //     } else {
    //         res.status(201).json({
    //             "message" : "Comentario enviado"
    //         })
    //     }
    // })

    
})

