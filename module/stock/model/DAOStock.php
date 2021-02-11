<?php
 $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
include($path . "/model/connect.php");
	

    
	class DAOUser{
		function insert_user($datos){
			$cod_producto=$datos['cod_producto'];
        	$cod_grupo=$datos['cod_grupo'];
        	$fecha_estreno=$datos['fecha_estreno'];
        	$nombre_grupo=$datos['nombre_grupo'];
        	$nombre_disco=$datos['nombre_disco'];
			$estilo_musical=$datos['estilo_musical'];
			$cod_compra = $datos['cod_compra'];
        	
       
        	$sql = " INSERT INTO stock (cod_producto, cod_grupo, fecha_estreno, nombre_grupo, nombre_disco, estilo_musical,cod_compra)"
        		. " VALUES ('', '$cod_grupo', '$fecha_estreno', '$nombre_grupo', '$nombre_disco', '$estilo_musical', '$cod_compra')";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
			return $res;
		}
		
		function select_count_user(){
			$sql = "SELECT * FROM stock ORDER BY cod_producto ASC";
			
			$conexion = connect::con();
			$res = mysqli_query($conexion, $sql);
			$rowcount = mysqli_num_rows($res);
            connect::close($conexion);
            return $rowcount;
		}

		function select_all_user(){
			$sql = "SELECT * FROM stock ORDER BY cod_producto ASC";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}
		
		function select_user($cod_producto){
			$sql = "SELECT * FROM stock WHERE cod_producto='$cod_producto'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
		}
		
		function update_user($datos){
		
        	$cod_grupo=$datos['cod_grupo'];
        	$fecha_estreno=$datos['fecha_estreno'];
        	$nombre_grupo=$datos['nombre_grupo'];
        	$nombre_disco=$datos['nombre_disco'];
			$estilo_musical=$datos['estilo_musical'];
			$cod_compra = $datos['cod_compra'];
			$cod_producto=$datos['cod_producto'];
        	
        	
        	
        	$sql = " UPDATE stock SET cod_grupo='$cod_grupo', fecha_estreno='$fecha_estreno', nombre_grupo='$nombre_grupo', nombre_disco='$nombre_disco',estilo_musical='$estilo_musical', cod_compra='$cod_compra' WHERE nombre_disco='$nombre_disco' or cod_grupo='$cod_grupo' or nombre_grupo='$nombre_grupo'";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
			return $res;
		}
		
		function delete_user($cod_producto){
			$sql = "DELETE FROM stock WHERE cod_producto='$cod_producto'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}


		function delete_all_user(){
		
			$sql = "DELETE  FROM stock";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}
	}

	