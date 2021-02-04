import './Contatos.css'

export default function Contatos(){

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
            <form method="post" action="">
                <div class="form-group">
                    <label class="col-form-label col-form-label-lg " for="nome"><b>Nome</b></label>
                    <input type="text" class="form-control form-control-lg font-weight-light bg-light" name="nome" id="nome" placeholder="Digite o seu nome"/>
                </div>
                <div class="form-group">
                    <label class="col-form-label col-form-label-lg " for="mensagem"><b>Mensagem</b></label>
                    <textarea type="text" name="mensagem" id="mmensagemm" class="form-control form-control-lg font-weight-light bg-light" placeholder="Digite a sua mensagem"></textarea>
                </div>
                <button type="submit" class="btn btn-info btn-lg" value="Enviar">Enviar</button>

                
            </form>
            </div>

        </div>
    );
}

