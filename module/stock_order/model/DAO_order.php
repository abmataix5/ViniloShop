<?php
	 $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
     include($path . "/model/connect.php");
    
    class DAOorder{

        function select_order(){
			$sql = "SELECT cod_producto,nombre_disco,cod_compra FROM stock";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }

	}