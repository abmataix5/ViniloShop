<?php
	class connect{
		public static function con(){
			$host = 'localhost';  
    		$user = "amat5";                     
    		$pass = "12345678";                             
    		$db = "viniloshop";                      
    		$port = 3306;                           
    		$tabla="stock";
    		
    		$conexion = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
			return $conexion;
		}
		public static function close($conexion){
			mysqli_close($conexion);
		}
	




		
}

