<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Full Stack Eletro</title>
    <link rel="stylesheet" href="./CSS/estilo.css" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>

<body>

    <div class="div1">
        <!-- MENU -->
        <?php
  include('menu.html');
 ?>

            <div class="container pesquisa">
                <main>
                    <h1>Seja bem vindo(a)!</h1>
                    <p>Aqui em nossa loja, programadores tem desconto nos produtos para sua casa!</p>
                    <input type="search" placeholder="O que você procura?">
                    <button type="button" class="btn btn-light border border-dark">Pesquisar</button>
                </main>
            </div>
        
    </div>

    <div class="div2">
        <footer id="rodape">
            <h4>Formas de pagamento</h4>
            <p><img width="25%" src="./imagens/formasPagamento.png" alt="Formas de pagamento"></p>
            <p id=logo_recode>&copy; Recode Pro</p>
        </footer>
    </div>
    
</body>

</html>
