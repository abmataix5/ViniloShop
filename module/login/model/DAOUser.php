<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/web';
    include($path . "/model/connect.php");

    
	class DAOlogin{
        function insert_user(){
            $nombre=$_POST['username'];
            $email=$_POST['email'];
            $passw=$_POST['password'];
            $type="client";
            $hashed_pass = password_hash($passw, PASSWORD_DEFAULT);
            $hashavatar= md5( strtolower( trim( $nombre ) ) );
            $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";
            $sql ="INSERT INTO `user`(`username`, `email`, `password`, `tipo`, `avatar`)
            VALUES ('$nombre','$email','$hashed_pass','$type', '$avatar')";

            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }
        function select_user(){
            $user=$_GET['username'];
            $sql = "SELECT * FROM user WHERE username='$user'";

            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();;
            connect::close($conexion);
            return $res;
        }

        

        function select_user_all($user){
            $sql = "SELECT * FROM user WHERE username='$user'";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
        }
 
    }
