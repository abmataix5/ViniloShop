<?php
 //echo $_SERVER['DOCUMENT_ROOT'];
   $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
   include($path . "/module/shop/model/DAOShop.php");
   
    //session_start();
    
    switch($_GET['op']){

        case 'list':

        include("module/shop/view/shop.html");
    break;
    
    
        case 'data_shop':
          
            try {
                $daoshop = new DAOShop();
                $rlt = $daoshop->select_all_data($_GET['offset']);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            
            if (!$rlt) {
                echo json_encode("error");
            }else{
                $prod = array();
                foreach ($rlt as $value) {
                    array_push($prod, $value);
                }
                echo json_encode($prod);
                exit();
            }
            break;

            case 'all_data_stock':
          
                try {
                    $daoshop = new DAOShop();
                    $rlt = $daoshop->all_data_Stock();
                } catch (Exception $e) {
                    echo json_encode("error");
                }
                
                if (!$rlt) {
                    echo json_encode("error");
                }else{
                    $prod = array();
                    foreach ($rlt as $value) {
                        array_push($prod, $value);
                    }
                    echo json_encode($prod);
                    exit();
                }
                break;

            case 'data_pag':
          
                try {
                    $daoshop = new DAOShop();
                    $rlt = $daoshop->select_all_data_COUNT();
                } catch (Exception $e) {
                    echo json_encode("error");
                }
                
                if (!$rlt) {
                    echo json_encode("error");
                }else{
                    $prod = array();
                    foreach ($rlt as $value) {
                        array_push($prod, $value);
                    }
                    echo json_encode($prod);
                    exit();
                }
                break;

            case 'list_modal':
                try {
                    $daoshop = new DAOShop();
                    $rlt = $daoshop->select_data($_GET['modal']);
                } catch (Exception $e) {
                    echo json_encode("error");
                }
                
                if (!$rlt) {
                    echo json_encode("error");
                }else{
                    echo json_encode($rlt);
                    exit();
                }	
                break;

            
            case 'op_categoria':

                try {
                    $daoshop = new DAOShop();
                    $rlt = $daoshop->select_categoria($_GET['categoria']);
                } catch (Exception $e) {
                    echo json_encode("error");
                }
                
                if (!$rlt) {
                    echo json_encode("error");
                }else{
                    $prod = array();
                    foreach ($rlt as $value) {
                        array_push($prod, $value);
                    }
                    echo json_encode($prod);
                    exit();
                }


            break;

            case 'op_filtros':

                try {
                    $daoshop = new DAOShop();
                    $rlt = $daoshop->select_filtros($_GET['checks']);
                } catch (Exception $e) {
                    echo json_encode("error");
                }
                
                if (!$rlt) {
                    echo json_encode("error");
                }else{
                    $prod = array();
                    foreach ($rlt as $value) {
                        array_push($prod, $value);
                    }
                    echo json_encode($prod);
                    exit();
                }


            break;


            case 'filtro_ngrupo':
          
                try {
                    $daoshop = new DAOShop();
                    $rlt = $daoshop->select_distinct_group();
                } catch (Exception $e) {
                    echo json_encode("error");
                }
                
                if (!$rlt) {
                    echo json_encode("error");
                }else{
                    $prod = array();
                    foreach ($rlt as $value) {
                        array_push($prod, $value);
                    }
                    echo json_encode($prod);
                    exit();
                }
                break;

                case 'filtro_estilo':
          
                    try {
                        $daoshop = new DAOShop();
                        $rlt = $daoshop->select_distinct_estilo();
                    } catch (Exception $e) {
                        echo json_encode("error");
                    }
                    
                    if (!$rlt) {
                        echo json_encode("error");
                    }else{
                        $prod = array();
                        foreach ($rlt as $value) {
                            array_push($prod, $value);
                        }
                        echo json_encode($prod);
                        exit();
                    }
                    break;


                    case 'filtro_categoria':
          
                        try {
                            $daoshop = new DAOShop();
                            $rlt = $daoshop->select_distinct_categoria();
                        } catch (Exception $e) {
                            echo json_encode("error");
                        }
                        
                        if (!$rlt) {
                            echo json_encode("error");
                        }else{
                            $prod = array();
                            foreach ($rlt as $value) {
                                array_push($prod, $value);
                            }
                            echo json_encode($prod);
                            exit();
                        }
                        break;




                        case 'count_shop':
          
                            try {
                                $daoshop = new DAOShop();
                                $rlt = $daoshop->count_products();
                            } catch (Exception $e) {
                                echo json_encode("error");
                            }
                            
                            if (!$rlt) {
                                echo json_encode("error");
                            }else{
                                $prod = array();
                                foreach ($rlt as $value) {
                                    array_push($prod, $value);
                                }
                                echo json_encode($prod);
                                exit();
                            }
                            break;

 

      


          


            }