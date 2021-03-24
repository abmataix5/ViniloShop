<?php
    function validate($username){
      
			$sql = "SELECT * FROM user WHERE username='$username'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
          
        
        if(!$res){
            return 1;
    
        }else{
            return 0;
        }
    }