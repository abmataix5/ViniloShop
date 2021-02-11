<?php
 //echo $_SERVER['DOCUMENT_ROOT'];
   $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
   include($path . "/module/stock/model/DAOStock.php");
   
    //session_start();
    
    switch($_GET['op']){
        case 'list';
        
        try{
            $daouser = new DAOUser();
            
            $rdo = $daouser->select_all_user();
            $count = $daouser->select_count_user();
        }catch (Exception $e){
            $callback = 'index.php?page=503';
            die('<script>window.location.href="'.$callback .'";</script>');
        }
        
        

        if((!$rdo)&&(!$count)){
       
            $callback = 'index.php?page=503';
            die('<script>window.location.href="'.$callback .'";</script>');
        }else{
            include("module/stock/view/list_stock.html");
        }
        break;
            
        case 'create';
        $e_cod_grupo="";
        $e_fecha_estreno = "";
        $e_nombre_grupo  = "";
        $e_nombre_disco  = "";
        $e_estilo_musical  = "";
        $e_cod_compra = "";

            include("module/stock/model/validate.php");
            
            // $check = true;
            if ($_POST){
            //if (isset($_POST['create'])){
                $check=validate($_POST['cod_compra']);
 
                if ($check){
                    $_SESSION['cod_producto']=$_POST;
                    try{
                        $daouser = new DAOUser();
    		            $rdo = $daouser->insert_user($_POST);
                    }catch (Exception $e){
                        $callback = 'index.php?page=503';
        			    die('<script>window.location.href="'.$callback .'";</script>');
                    }
                    
		            if($rdo){
            			echo '<script language="javascript">alert("Registrado en la base de datos correctamente")</script>';
            			$callback = 'index.php?page=controller_stock&op=list';
        			    die('<script>window.location.href="'.$callback .'";</script>');
            		}else{
            			$callback = 'index.php?page=503';
    			        die('<script>window.location.href="'.$callback .'";</script>');
            		}
                }else{
                    $e_cod_compra = "El codigo de compra ya existe";
                }
            }
            include("module/stock/view/create_stock.php");
            break;
            
        case 'update';

        // inicialitzem les variables per a que no done error
        $e_cod_grupo="";
        $e_fecha_estreno ="";
        $e_nombre_grupo  ="";
        $e_nombre_disco  ="";
        $e_estilo_musical  ="";
        $e_cod_compra ="";
        //inicialitzem les variables per a que no done error
            include("module/stock/model/validate.php");
            
           // $check = true;
            
            if ($_POST){
                $check=validate($_POST['cod_compra']);
                
                if ($check){
                    $_SESSION['cod_producto']=$_POST;
                    try{
                        $daouser = new DAOUser();
    		            $rdo = $daouser->update_user($_POST);
                    }catch (Exception $e){
                        $callback = 'index.php?page=503';
        			    die('<script>window.location.href="'.$callback .'";</script>');
                    }
                    
		            if($rdo){
            			echo '<script language="javascript">alert("Actualizado en la base de datos correctamente")</script>';
            			$callback = 'index.php?page=controller_stock&op=list';
        			    die('<script>window.location.href="'.$callback .'";</script>');
            		}else{
            			$callback = 'index.php?page=503';
    			        die('<script>window.location.href="'.$callback .'";</script>');
            		}
                }else{
                    $e_cod_compra = "El numero de reserva ya existe en la base de datos";
                }
            }
            
            try{
                $daouser = new DAOUser();
            	$rdo = $daouser->select_user($_GET['id']);
            	$cod_producto=get_object_vars($rdo);
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            
            if(!$rdo){
    			$callback = 'index.php?page=503';
    			die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
        	    include("module/stock/view/update_stock.php");
    		}
            break;
            
        case 'read';
            try{
                $daouser = new DAOUser();
            	$rdo = $daouser->select_user($_GET['id']);
            	$codviaje=get_object_vars($rdo);
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            if(!$rdo){
    			$callback = 'index.php?page=503';
    			die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
                include("module/stock/view/read_user.php");
    		}
            break;
            
        case 'delete';
           
        if (isset($_POST['delete'])){
                try{
                    $daouser = new DAOUser();
                	$rdo = $daouser->delete_user($_GET['id']);
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
    			    die('<script>window.location.href="'.$callback .'";</script>');
                }
            	
            	if($rdo){
        			echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
        			$callback = 'index.php?page=controller_stock&op=list';
    			    die('<script>window.location.href="'.$callback .'";</script>');
        		}else{
        			$callback = 'index.php?page=503';
			        die('<script>window.location.href="'.$callback .'";</script>');
        		}
            }
            

            try{
                $daouser = new DAOUser();
            	$rdo = $daouser->select_user($_GET['id']);
            	$cod_producto=get_object_vars($rdo);
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            if(!$rdo){
    			$callback = 'index.php?page=503';
    			die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
                include("module/stock/view/delete_stock.php");
    		}
            
            break;


        case 'deleteall';
   
            try{
                $daouser = new DAOUser();
            	$rdo = $daouser->delete_all_user();
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            
            if(!$rdo){
    			$callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
                include("module/stock/view/list_stock.php");
    		}
            break;
       
       
            default;
            include("view/inc/error404.php");
            break;

    
         case 'read_modal' ;

            // echo $_GET ("modal");
            // exit;

            try{
                $daouser = new DAOUser();
            	$rdo = $daouser->select_user($_GET['modal']);
            }catch (Exception $e){
                echo json_encode("error");
                exit;
            }
            if(!$rdo){
    			echo json_encode("error");
                exit;
    		}else{
    		    $cod_producto=get_object_vars($rdo);
                echo json_encode($cod_producto);
                //echo json_encode("error");
                exit;
    		}
            break;





    }