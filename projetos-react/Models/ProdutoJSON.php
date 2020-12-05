<?php

include_once('./ClasseProduto.php');

$produto = Produto::getAll();

// Libera o cors e outras aplicações
header("Access-Control-Allow-Origin:*");
// Indica o conteúdo JSON
header("Content-type: application/json");

echo json_encode($produto); 