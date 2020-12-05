-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05/12/2020 às 00:35
-- Versão do servidor: 10.4.14-MariaDB
-- Versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fullstackeletro`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `mensagem` varchar(300) NOT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `mensagem`, `data`) VALUES
(8, 'Willyan', 'Olá equipe da Full Stack Eletro!', '2020-10-31 03:33:43'),
(9, 'Willyan', 'Testando com Bootstrap', '2020-11-04 01:47:54'),
(10, 'Willyan', 'teste', '2020-11-18 02:02:36');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedidos`
--

CREATE TABLE `pedidos` (
  `id_cliente` int(11) NOT NULL,
  `nome_cliente` varchar(50) NOT NULL,
  `endereço_cliente` varchar(80) NOT NULL,
  `telefone_cliente` int(10) NOT NULL,
  `produto_cliente` varchar(150) NOT NULL,
  `valor_produto` decimal(8,2) NOT NULL,
  `qtde_produto` int(11) NOT NULL,
  `valor_total` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descrição` varchar(150) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `preço` float(8,2) DEFAULT NULL,
  `preçofinal` float(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descrição`, `imagem`, `preço`, `preçofinal`) VALUES
(1, 'geladeira', 'Geladeira Refrigerador Consul Duplex Frost Free 340 litros Branca 110V', 'Geladeira01_1.png', 2069.89, 1969.89),
(2, 'geladeira', 'Geladeira/Refrigerador Brastemp Frost Free BRM44 375 Litros - Evox - 110v', 'Geladeira02_1.png', 2448.99, 2348.99),
(3, 'geladeira', 'Refrigerador Brastemp Side Inverse BRO80 540 Litros Ice Maker Evox 110v', 'Geladeira03_1.png', 5258.99, 5199.99),
(4, 'fogão', 'Fogão Brastemp 5 Bocas BFS5N - Inox', 'Fogao01_1.png', 1599.89, 1499.89),
(5, 'fogão', 'Fogão de Piso Mesa de Vidro Electrolux 5', 'Fogao02_1.png', 1849.89, 1748.89),
(6, 'microondas', 'Microondas 25L Espelhado Pme25 Philco 127V', 'Microondas01_1.png', 679.99, 579.99),
(7, 'microondas', 'Micro-ondas Consul Espelhado 32 Litros - CMS45 220v', 'Microondas02_1.png', 699.00, 599.00),
(8, 'microondas', 'Micro-ondas Brastemp Espelhado Grill 32', 'Microondas03_1.png', 649.89, 599.89),
(9, 'lava_roupas', 'Máquina De Lavar Roupas Midea Storm', 'Lavadoura01_1.png', 3099.00, 2999.00),
(10, 'lava_roupas', 'Lavadora de Roupas Brastemp 12Kg', 'Lavadoura02_1.png', 2099.99, 1999.99),
(11, 'lava_loucas', 'Lava-Louças Electrolux Inox 14 Serviços LV14X', 'Lava_louca01_1.png', 4423.90, 4323.90),
(12, 'lava_loucas', 'Lava Louças Brastemp 10 Serviços BLF10 Branca 110V', 'Lava_louca02_1.png', 3699.89, 3599.89);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_cliente`),
  ADD UNIQUE KEY `UNIQUE` (`nome_cliente`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
