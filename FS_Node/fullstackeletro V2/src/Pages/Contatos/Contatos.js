import { React, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

import './Contatos.css';

export default function Contatos(){

    const [dados, setDados] = useState([]);
    const [nome, setNome] = useState('Will')
    const [mensagem, setMensagem] = useState('Testando')
    // const [render, setRender] = useState([])

    // React.useEffect(async () => {
        
    //     const url = "http://localhost:3333/Contatos";
    //     const response = await fetch(url)
    //     console.log(response)

    //     console.log("Trouxe a mensagem")
    //     setDados (await response.json());
        
    // },[])

    
    useEffect( async () => {
        console.log("Trouxe as Mensagens");

        const url = "http://localhost:3333/Contatos";
        const response = await fetch(url);

        setDados(await response.json());
        console.log(dados)
    },[])


    function registrarMensagem(event){
        // Não permite que a página de formulário seja recarregada
        event.preventDefault();

        console.log(event.target)
        let formData = new FormData(event.target)

        console.log(formData.get('nome'))
        console.log(formData.get('mensagem'))

        var objeto= {
            nome:formData.get("nome"),
            mensagem:formData.get("mensagem")
        }

        console.log(objeto)

        var converteJson = JSON.stringify(objeto)
        console.log(converteJson)

        const url = "http://localhost:3333/Contatos"
        fetch(url, {
            method:"POST",
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body:converteJson
        })
}

    return (
        <div class="container">

            <div>
                <table class="table tabela_contato table-hover table-light">
                    <tr>
                        <td>
                            <img src={require('./imgContatos/email.png').default} alt="imagem email" /><br/>
                            <font>contato@fullstackeletro.com</font>
                        </td>
                        <td>
                            <img src={require('./imgContatos/telefoneWhatsapp.png').default} alt="imagem whats" /><br/>
                            <font>(11) 99999-9999</font>
                        </td>
                    </tr>
                </table>
            </div>
            
            <div>
            <form method="post" action="" onSubmit={registrarMensagem} >
                <div className="form-group">

                    <label className="col-form-label col-form-label-lg " for="nome"><b>Nome</b></label>
                    <input 
                    type="text"
                    className="form-control form-control-lg font-weight-light bg-light"
                    name="nome"
                    id="nome"
                    placeholder="Digite o seu nome"
                    value={nome}
                    onChange={(event) => {
                        setNome(event.target.value)
                    }}
                    />
                
                </div>
                <div className="form-group">
                    <label className="col-form-label col-form-label-lg " for="mensagem"><b>Mensagem</b></label>
                    <textarea 
                    type="text" 
                    name="mensagem" 
                    id="mensagem" 
                    className="form-control form-control-lg font-weight-light bg-light"
                    placeholder="Digite a sua mensagem"
                    value={mensagem}
                    onChange={(event) => {
                        setMensagem(event.target.value)
                    }}
                    >
                    </textarea>
                </div>
                <button type="submit" className="btn btn-info btn-lg" value="Enviar">Enviar</button>

                
            </form>
            </div>
            
            <div className="row justify-content-around">
                <div className="col">
                    <div style={{"height":"500px","overflow": "auto"}}>
                        <div className="w-100">
                            {
                                dados.map((row, index) => 
                                    <Card className="my-2 shadow" key="row.index">
                                        <Card.Body>
                                            <Card.Title>
                                                {row.nome}
                                            </Card.Title>
                                            <Card.Text>
                                                {row.mensagem}
                                            </Card.Text>
                                            
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

