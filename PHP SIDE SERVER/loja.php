<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Nossas lojas - Full Stack Eletro</title>
    <link rel="stylesheet" href="./CSS/estilo.css" type="text/css">
</head>
<body>
    <!--Menu-->
    <div class="div1lojas">
 <!-- MENU -->
 <?php
  include('menu.html');
 ?>
      
      <!--Fim Menu-->

      <main>
        <input type="search" placeholder="O que você procura?">
      </main>
      
    </div>

    <div class="div2Lojas">
    <h2>Nossas lojas</h2>
    <hr>
    <table class="tabela_lojas" border=0 width="100%" cellpadding="50">
      <tr>
          <td width="33%">
              <h3>Rio de Janeiro</h3>
              <p>Avenida Presidente Vargas, 5000</p>
              <p>10 &ordm; andar</p>
              <p>Centro</p>
              <p>(21) 3333-3333</p>
          </td>
          <td width="33%">
              <h3>São Paulo</h3>
              <p>Avenidade Paulista, 985</p>
              <p>3 &ordm; andar</p>
              <p>Jardins</p>
              <p>(11) 4444-4444</p>
          </td>
          <td width="33%">
              <h3>Santa Catarina</h3>
              <p>Rua Major &Aacute; vila, 370</p>
              <p>Vila Mariana</p>
              <p>(47) 5555-5555</p>
          </td>
      </tr>
  </table>
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