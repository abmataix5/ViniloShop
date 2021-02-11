
<?php 
	   $path = $_SERVER['DOCUMENT_ROOT'] . '/web';
    include($path . "/module/stock_order/model/DAO_order.php");
	// @session_start();
	// if (isset($_SESSION["tiempo"])) {  
	// 	$_SESSION["tiempo"] = time();
	// }
	
    switch ($_GET['op']) {
		case 'list':
				include("module/stock_order/view/list_order.html");
			break;
			
		case 'datatable':
            try{
				$daoorder = new DAOorder();
				$rlt = $daoorder->select_order();
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
			
		default:
			include("view/inc/error404.php");
			break;
	}
