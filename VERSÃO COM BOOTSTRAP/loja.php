<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Nossas lojas - Full Stack Eletro</title>
    <link rel="stylesheet" href="./CSS/estilo.css" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>
    <!--Menu-->
    <div class="div1lojas">
        <!-- MENU -->
        <?php
  include('menu.html');
 ?>

        <!--Fim Menu-->

        <div class="container pesquisa">
            <main>
                <input type="search" placeholder="O que você procura?">
                <button type="button" class="btn btn-light  border border-dark">Pesquisar</button>
            </main>
        </div>

    </div>

    <div class="div2nossasLojas">
        <h2>Nossas lojas</h2>
    </div>

    <div class="container-fluid">
        <table class="table table-bordered table-hover table-responsive-sm text-center ">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Estado</th>
                    <th scope="col">Rio de Janeiro</th>
                    <th scope="col">São Paulo</th>
                    <th scope="col">Santa Catarina</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Endereço</th>
                    <td>Avenida Presidente Vargas, 5000</td>
                    <td>Avenidade Paulista, 985</td>
                    <td>Rua Major &Aacute; vila, 370</td>
                </tr>
                <tr>
                    <th scope="row">Complemento</th>
                    <td>10 &ordm; andar</td>
                    <td>3 &ordm; andar</td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Bairro</th>
                    <td>Centro</td>
                    <td>Jardins</td>
                    <td>Vila Mariana</td>
                </tr>
                <tr>
                    <th scope="row">Contato</th>
                    <td>(21) 3333-3333</td>
                    <td>(11) 4444-4444</td>
                    <td>(47) 5555-5555</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>


    <div class="div2">
        <footer id="rodape">
            <h4>Formas de pagamento</h4>
            <p><img width="25%" src="./imagens/formasPagamento.png" alt="Formas de pagamento"></p>
            <p id=logo_recode>&copy; Recode Pro</p>
        </footer>
    </div>
</body>

</html>
