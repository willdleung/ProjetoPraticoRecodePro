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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>

    <div class="div1produtos">

        <!-- MENU -->
        <?php
  include('menu.html');
 ?>

        <div class="container pesquisa">
            <main>
                <input type="search" placeholder="O que você procura?">
                <button type="button" class="btn btn-light border border-dark">Pesquisar</button>
            </main>
        </div>

    </div>

    <div class="div2produtos">
        <h2>Produtos</h2>
        <br>    
        
<!-- onmouseover="big(this)"  -->
        <div class="dropdown categorias shadow rounded ">
            <button class="btn btn-transparent btn-lg btn-dark dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categoria de produtos
            </button>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                <h6 class="dropdown header text-center font-weight-bold"><u>FILTRO</u></h6>
                <button class="dropdown-item" type="button" onclick="exibir_todos()">Todos</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button" onclick="exibir_categoria('geladeira')">Geladeiras</button>
                <button class="dropdown-item" type="button" onclick="exibir_categoria('fogão')">Fogões</button>
                <button class="dropdown-item" type="button" onclick="exibir_categoria('microondas')">Microondas</button>
                <button class="dropdown-item" type="button" onclick="exibir_categoria('lava_roupas')">Lavadoura de roupas</button>
                <button class="dropdown-item" type="button" onclick="exibir_categoria('lava_loucas')">Lava-louças</button>
            </div>
        </div>

        <div class="produtos">

            <?php
    $sql = "SELECT * from produto";
    $result = $conn->query($sql);

    if($result->num_rows >0) {
      while($rows = $result->fetch_assoc()){
    ?>

            <div class=" box_produtos" id="<?php echo $rows["categoria"]; ?>" style="display: block;">
                <img src="./imagens/<?php echo $rows["imagem"]; ?>" width="120px" onclick="destaque(this)">
                <div class="descrição"><?php echo $rows["descrição"]; ?></div>
                <br>
                <hr>
                <br>
                <div class="descrição">R$ <?php echo $rows["preço"]; ?></div>
                <div class="preço">R$ <?php echo $rows["preçofinal"]; ?></div>
            </div>

            <?php
      }
    } else {
        echo "Nenhum produto cadastrado";
    }
    ?>

        </div>

        <br>

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
