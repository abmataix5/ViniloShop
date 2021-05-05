<?php
 $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
include($path . "/model/connect.php");

class DAOShop{

    function select_all_data($offset){
        $sql = "SELECT * FROM stock LIMIT 12 OFFSET $offset";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function all_data_Stock(){
        $sql = "SELECT * FROM stock";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_all_data_COUNT(){
        $sql = "SELECT * FROM stock ";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }
    
    
    function select_data($cod_producto){
        $sql = "SELECT * FROM stock WHERE cod_producto='$cod_producto'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql)->fetch_object();
        connect::close($conexion);
        return $res;
    }


    function select_categoria($categoria){
        $sql = "SELECT * FROM stock WHERE categoria='$categoria'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_filtros($checks){
        $sql = "SELECT * FROM stock WHERE $checks";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    } 

    function select_distinct_group(){
        $sql = "SELECT  nombre_grupo,cod_grupo FROM stock GROUP BY nombre_grupo";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_distinct_estilo(){
        $sql = "SELECT DISTINCT estilo_musical FROM stock";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    
    function select_distinct_categoria(){
        $sql = "SELECT DISTINCT categoria FROM stock";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function count_products(){
        $sql = "SELECT COUNT(*) FROM stock ";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_all_search($val,$catego,$estilo){
        $sql = "SELECT * FROM stock WHERE categoria='$catego' AND estilo_musical='$estilo' AND nombre_grupo LIKE '".$val. "%'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_cat_est($catego,$estilo){
        $sql = "SELECT * FROM stock WHERE categoria='$catego' AND estilo_musical='$estilo'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_catego_auto($catego,$val){
        $sql = "SELECT * FROM stock WHERE categoria='$catego' AND nombre_grupo LIKE '".$val. "%'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_catego($catego){
        $sql = "SELECT * FROM stock WHERE categoria='$catego'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function select_auto($val){
        $sql = "SELECT * FROM stock WHERE  nombre_grupo LIKE '%".$val. "%'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    function insert_like(){
        $nombre=$_POST['username'];
        $producto=$_POST['cod_producto'];
    
        $sql ="INSERT INTO `favoritos`(`username`, `cod_producto`)
        VALUES ('$nombre','$producto')";

        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }

    
    function delete_like(){
        $nombre=$_POST['username'];
        $producto=$_POST['cod_producto'];
    
        $sql ="DELETE FROM `favoritos` WHERE username = $nombre and cod_producto = $producto";

        $conexion = connect::con();
        $res = mysqli_query($conexion, $sql);
        connect::close($conexion);
        return $res;
    }




}