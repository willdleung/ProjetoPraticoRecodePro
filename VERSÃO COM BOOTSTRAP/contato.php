<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "fullstackeletro";
    // Criando a conexão
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Verificando a conexão
    if (!$conn) {
        die("A conexão falhou: " . mysqli_connect_error());
    }
    

    if(isset($_POST['nome']) && isset($_POST['mensagem'])){
      $nome = $_POST['nome'];
      $mensagem = $_POST['mensagem'];

      $sql = "INSERT into comentarios (nome, mensagem) values ('$nome', '$mensagem')";
      $result = $conn->query($sql);

    }

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato - Full Stack Eletro</title>
    <link rel="stylesheet" href="./CSS/estilo.css" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>

    <!--Menu-->
    <div class="div1contato">
        <!-- MENU -->
        <?php
  include('menu.html');
 ?>

        <div class="container pesquisa">
            <main>
                <input type="search" placeholder="O que você procura?">
                <button type="button" class="btn btn-light  border border-dark">Pesquisar</button>
            </main>
        </div>

    </div>
    <!--Fim Menu-->

    <div class="div2Contato">
        <h2>Contato</h2>

        <table class="tabela_contato">
            <tr>
                <td>
                    <img src="./imagens/email.png"><br>
                    <font>contato@fullstackeletro.com</font>
                </td>
                <td>
                    <img src="./imagens/telefoneWhatsapp.png"><br>
                    <font>(11) 99999-9999</font>
                </td>
            </tr>
        </table>
        <br>

        <div class="container">

            <form method="post" action="">
                <div class="form-group">
                    <label class="col-form-label col-form-label-lg " for="nome"><b>Nome</b></label>
                    <input type="text" class="form-control form-control-lg font-weight-light bg-light" name="nome" id="nome" placeholder="Digite o seu nome">
                </div>
                <div class="form-group">
                    <label class="col-form-label col-form-label-lg " for="mensagem"><b>Mensagem</b></label>
                    <textarea type="text" name="mensagem" id="mmensagemm" class="form-control form-control-lg font-weight-light bg-light" placeholder="Digite a sua mensagem"></textarea>
                </div>
                <button type="submit" class="btn btn-info btn-lg" value="Enviar">Enviar</button>
            </form>
            <br>

            <?php
    $sql = "SELECT * from comentarios";
    $result = $conn->query($sql);

    if($result->num_rows >0) {
      while($rows = $result->fetch_assoc()){
        echo "Data: ", $rows['data'],"<br>";
        echo "Nome: ", $rows['nome'],"<br>";
        echo "Mensagem: ", $rows['mensagem'],"<br>";
        echo "<hr>";
      }
    } else {
        echo "Nenhum comentário ainda!";
    }
    ?>

        </div>

        <div class="div2">
            <footer id="rodape">
                <h4>Formas de pagamento</h4>
                <p><img width="25%" src="./imagens/formasPagamento.png" alt="Formas de pagamento"></p>
                <p id=logo_recode>&copy; Recode Pro</p>
            </footer>
        </div>
    </div>
</body>

</html>
