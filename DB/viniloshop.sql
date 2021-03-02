-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-03-2021 a las 20:43:32
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viniloshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banner`
--

CREATE TABLE `banner` (
  `tipo` varchar(200) NOT NULL,
  `ruta` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `banner`
--

INSERT INTO `banner` (`tipo`, `ruta`) VALUES
('carlcox', 'view/images/carlcox1.jpg'),
('rolling', 'view/images/rolling1.jpg'),
('queen', 'view/images/queen1.jpg'),
('fisher', 'view/images/fisher1.jpg'),
('fisher', 'view/images/radiohead1.png'),
('metallica', 'view/images/metallica1.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `categoria` varchar(200) NOT NULL,
  `ruta` varchar(200) NOT NULL,
  `contador` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`categoria`, `ruta`, `contador`) VALUES
('Disco', 'view/images/discos.jpg', 7),
('Camiseta', 'view/images/rolling.jpg ', 8),
('Vinilo', 'view/images/vinilo.jpg', 7),
('Poster', 'view/images/poster.jpg', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `cod_producto` int(200) NOT NULL,
  `cod_grupo` varchar(200) NOT NULL,
  `fecha_estreno` varchar(200) NOT NULL,
  `nombre_grupo` varchar(200) NOT NULL,
  `nombre_disco` varchar(200) NOT NULL,
  `estilo_musical` char(50) DEFAULT NULL,
  `cod_compra` int(200) DEFAULT NULL,
  `categoria` varchar(200) DEFAULT NULL,
  `ruta` varchar(200) DEFAULT NULL,
  `longitud` varchar(200) DEFAULT NULL,
  `latitud` varchar(200) DEFAULT NULL,
  `precio` varchar(200) DEFAULT NULL,
  `click_count` varchar(20) DEFAULT NULL,
  `img_grupo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`cod_producto`, `cod_grupo`, `fecha_estreno`, `nombre_grupo`, `nombre_disco`, `estilo_musical`, `cod_compra`, `categoria`, `ruta`, `longitud`, `latitud`, `precio`, `click_count`, `img_grupo`) VALUES
(6, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view\\images\\portada_acdc.jpg'),
(15, '0001', '9/9/9', 'Rolling Stones', 'Black', 'Rock', 7777, 'Disco', 'view/images/rollingdisco1.jpg', '-71.9673386', '	\r\n-13.5226402', '150', NULL, 'view/images/portada_rolling.jpg'),
(16, '0001', '9/9/9', 'Rolling Stones', 'Black', 'Rock', 7777, 'Disco', 'view/images/rollingdisco1.jpg', '-25.03164', '-79.3640', '40', NULL, 'view/images/portada_rolling.jpg'),
(17, '0002', '19/01/2009', 'Metallica', 'Black Widow', 'Rock', 6, 'Vinilo', 'view/images/vinilometallica1.jpg', NULL, NULL, '75', NULL, 'view/images/metal_logo.jpg'),
(18, '0003', '19/01/2019', 'Carl Cox', 'Boiler Room', 'Rock', 6788, 'Vinilo', 'view/images/vinilo.jpg\r\n', NULL, NULL, '75', NULL, 'view/images/cox_logo.png'),
(19, '0049', '19/01/2009', 'Rolling Stones', 'Losing It', 'Rock', 7642, 'Camiseta', 'view/images/rolling.jpg', NULL, NULL, '60', NULL, 'view/images/fish_logo.jpg'),
(21, '0004', '15/05/2019', 'Fito y Fitipaldis', 'Entre la espada y la pared', 'Pop', 946444, 'Camiseta', 'view/images/fitocamiseta.jpg', NULL, NULL, '68', NULL, 'view/images/fito_portada.png'),
(22, '0934', '19/01/2009', 'System Of a Down', 'Warwick', 'Clasica', 6139, 'Disco', 'view/images/discos.jpg', NULL, NULL, '190', NULL, 'view/images/sys_portada.png'),
(23, '0039', '19/01/2009', 'Scorpions', 'Sitlling Loving You', 'Rock', 4374, 'Poster', 'view/images/scorpionsposter.jpg', NULL, NULL, '20', NULL, 'view\\images\\scorpions_portada.jpg'),
(24, '0005', '19/01/2009', 'The Beatles', 'Yesterday', 'Pop', 379, 'Poster', 'view/images/poster.jpg\r\n', NULL, NULL, '70', NULL, 'view/images/beatles_portada.png'),
(66, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(133, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(143, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(183, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(543, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(633, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(643, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(666, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Camiseta', 'view/images/cami_acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg'),
(718, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png'),
(768, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png'),
(794, '0009', '34/02/2021', 'Mana', 'Mana', 'Pop', 913, 'Camiseta', '	\r\nview/images/mana.jpg', '79.1203', '92.321658', '35', '0', 'view/images/mana_portada.jpg'),
(798, '0004', '34/02/2021', 'Fito y Fitipaldis', 'Fito', 'Pop', 913, 'Camiseta', '	\r\nview/images/fitet.jpg', '79.1203', '92.321658', '35', '0', 'view/images/fito_portada.png'),
(943, '0099', '35/02/2021', 'AC/DC', 'Yhea', 'Rock', 643, 'Vinilo', 'view/images/acdc.jpg', '-74.00597', '40.71427', '150', NULL, 'view/images/portada_acdc.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`cod_producto`),
  ADD KEY `cod_compra` (`cod_compra`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `cod_producto` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=944;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
