<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/web';
     include($path . "/module/login/model/DAOUser.php");  
     include($path . "/module/login/model/validate_user.php"); 
	 include($path . "/module/login/model/functions_login.php"); 
	 include($path . "/utils/middleware_auth.php");  
	 
/* 	@session_start(); */

    switch ($_GET['op']) {
		case 'login_list':
            include("module/login/view/login.html");
			break;

		case 'register_list':
			include("module/login/view/register.html");
				
			break;
		 case 'register':

				$valide = validate($_POST['username']);
			/* 	echo($valide); */
				if($valide == 1){
					
					try {
						$daologin = new DAOlogin();
						$rlt = $daologin->insert_user($_POST['username'], $_POST['email'], $_POST['password']);
					} catch (Exception $e) {
						echo "Error al registrarse";
						exit();
					}
					if(!$rlt){
						echo "Error al registrarse";
						exit();
					}else{
					 echo ("All ok");
					}	
				}else{
					echo("Ya existe ese usuario");
					exit();
				}
			break;
			
 		case 'login':
		/* 	include($path . "/utils/middleware_auth.php");   */
			try {
				$daologin = new DAOlogin();
				$rlt = $daologin->select_user($_POST['username']);
			
				
		
			} catch (Exception $e) {
				echo "error";
				exit();
			}
			if(!$rlt){
				echo "El usuario no existe";
				exit();
			}else{
				
				$value = get_object_vars($rlt); 

				if (password_verify($_POST['password'],$value['password'])) {
									
	                    /* Token dependiendo el usuario que inicie sesion, lo guardaremos en el servidor */
						$token = encode_token($_POST['username']);
 
					 	echo json_encode($token);  
					exit();
				}else {
					echo "Error";
					exit();
				}
			}	
			break;


			case 'menu':
	
				try{
				
				 	 
				
					 
					 	    $user = decode_token($_POST['token']);
						
							$user = user_from_token($user);  
			
							$daologin = new DAOlogin();
							$rlt = $daologin->select_user_all($user);   
							
				} catch(Exception $e){
					echo json_encode("error");
				}
			
				  if(!$rlt){
					echo json_encode("error");
				}
				else{
					$dinfo = array();
					foreach ($rlt as $row) {
						array_push($dinfo, $row);
					}
					echo json_encode($dinfo);
				}  
				break;



	}
