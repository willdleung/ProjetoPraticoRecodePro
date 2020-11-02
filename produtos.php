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
    
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Produtos - Full Stack Eletro</title>
  <link rel="stylesheet" href="./CSS/estilo.css" type="text/css">
  <script src="./js/funções.js"></script>
  </head>
<body>

  <div class="div1produtos">

 <!-- MENU -->
 <?php
  include('menu.html');
 ?>

  <main>
    <input type="search" placeholder="O que você procura?">
  </main>

  </div>

  <div class="div2produtos">
    <h2>Produtos</h2>
    <hr>
    <br>
<!-- onmouseover="big(this)"  -->
    <section class="categorias">
     <h3>Categorias</h3>
      <ul> 
        <li onclick="exibir_todos()">Todos (12)</li>
        <li onclick="exibir_categoria('geladeira')">Geladeiras (3)</li>
        <li onclick="exibir_categoria('fogão')">Fogões (2)</li>
        <li onclick="exibir_categoria('microondas')">Microondas (3)</li>
        <li onclick="exibir_categoria('lava_roupas')">Lavadoura de roupas (2)</li>
        <li onclick="exibir_categoria('lava_loucas')">Lava-louças (2)</li>
      </ul>
    </section>

    <section class="produtos">

    <?php
    $sql = "SELECT * from produto";
    $result = $conn->query($sql);

    if($result->num_rows >0) {
      while($rows = $result->fetch_assoc()){
    ?>

      <div class="box_produtos" id="<?php echo $rows["categoria"]; ?>" style="display: block;">
        <img src="<?php echo $rows["imagem"]; ?>" width="120px" onclick="destaque(this)">
        <div class="descrição"><?php echo $rows["descrição"]; ?></div>
        <br>
        <hr>
        <br>
        <div class="descrição"><?php echo $rows["preço"]; ?></div>
        <div class="preço"><?php echo $rows["preçofinal"]; ?></div>
      </div>

    <?php
      }
    } else {
        echo "Nenhum produto cadastrado";
    }
    ?>

    </section>

    <br>
    <hr>

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