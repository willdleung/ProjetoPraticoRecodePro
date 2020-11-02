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
</head>
<body>

<!--Menu-->
    <div class="div1contato">
 <!-- MENU -->
 <?php
  include('menu.html');
 ?>

      <main>
        <input type="search" placeholder="O que você procura?">
      </main>

    </div>
<!--Fim Menu-->
    
    <div class="div2Contato">
    <h2>Contato</h2>
    <hr>
    <table class="tabela_contato">
      <tr>
        <td>
          <img  src="./imagens/email.png" ><br>
          <font>contato@fullstackeletro.com</font>
        </td>
        <td>
          <img src="./imagens/telefoneWhatsapp.png"><br>
          <font>(11) 99999-9999</font>
      </td>
      </tr>
    </table>
    <br>

    <form method="post" action=""  class="form_contato">
      <h4>Nome: </h4>
      <input type="text" name="nome">
      <h4>Mensagem: </h4>
      <textarea type="text" name="mensagem" placeholder="Digite a sua mensagem"></textarea>
      <br><br>
      <input type="submit" value="Enviar">
    </form>
    <br>
    <hr>

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