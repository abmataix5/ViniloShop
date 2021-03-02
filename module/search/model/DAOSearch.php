<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/web';
include($path . "/model/connect.php");


class DAOSearch{

    
    function select_catego(){
        $sql = "SELECT DISTINCT categoria FROM stock";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }


        
    function select_estilo($categoria){
        $sql = "SELECT DISTINCT estilo_musical FROM stock WHERE categoria='$categoria' ORDER BY estilo_musical ASC";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }


    function autocomplete(){
        $val = $_POST['auto'];
        $estilo_musical = $_POST['drop2'];
        $sql = "SELECT * FROM stock WHERE estilo_musical = '".$estilo_musical."' and nombre_grupo LIKE '%".$val."%' GROUP BY nombre_grupo";
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
     }
}

