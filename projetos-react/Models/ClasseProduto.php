<?php

include_once('./ClasseConexao.php');

class Produto
{
    public $idproduto;
    public $categoria;
    public $descrição;
    public $imagem;
    public $preço;
    public $preçofinal;

    public static function getAll()
    {
        $connection = Connection::conectaDb();

        $stmt = $connection->query("SELECT * FROM produto"); 
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}