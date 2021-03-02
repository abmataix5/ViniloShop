<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
    include($path . "/module/search/model/DAOSearch.php");
    
        switch($_GET['op']){
            case 'por_fecha':
                try{
                    $DAOsearch = new DAOSearch();
                    $rdo = $DAOsearch->select_catego();
                }catch (Exception $e){
                    echo json_encode("error");
                    exit;
                }
                if(!$rdo){
                    echo json_encode("error");
                    exit;
                }else{
                    $favor = array();///inicializamos el array
                    foreach ($rdo as $row) {
                        array_push($favor, $row);//lo rellenamos con array_push
                    }
                    echo json_encode($favor);///lo pasamos a json
                    exit;
                }
                break;
                
            case 'por_catego':
                try{
                    $DAOsearch = new DAOSearch();
                    $rdo = $DAOsearch->select_estilo($_GET['id']);
        
                }catch (Exception $e){
                    echo json_encode("error");
                    exit;
                }
                if(!$rdo){
                    echo json_encode("error");
                    exit;
                }else{
                    $favor = array();///inicializamos el array
                    foreach ($rdo as $row) {
                        array_push($favor, $row);//lo rellenamos con array_push
                    }
                    echo json_encode($favor);///lo pasamos a json
                    exit;
                }
                break;
            
            case 'autocomplete':
                    try{
                        $DAOsearch = new DAOSearch();
                        $rdo = $DAOsearch->autocomplete();
                    }catch (Exception $e){
                        echo json_encode("error");
                        exit;
                    }
                    if(!$rdo){
                        echo json_encode("error");
                        exit;
                    }else{
                        foreach ($rdo as $row) {
                                echo 
                                '<div class="autelem">
                                    <a  class="element" data="'.$row['categoria'].'" id="'.$row['nombre_grupo'].'">'.utf8_encode($row['nombre_grupo']).'</a>
                                </div>';
                        }
                        exit;
                    }
                    break;
                
            default:
                include("view/inc/error/error404.php");
                break;
        }
?>