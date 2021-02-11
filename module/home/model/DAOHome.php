<?php
 $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
include($path . "/model/connect.php");
    


class DAOHome{

    function select_slider(){

        $sql = " SELECT * FROM banner ";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;

    }


    function select_categoria(){

        $sql = "SELECT * FROM categorias ";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;

    }

  


}