<?php
    function validate($cod_compra){
      
			$sql = "SELECT * FROM stock WHERE cod_compra='$cod_compra'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
       
        
        if(!$res){
            return true;
    
        }else{
            return false;
        }
    }