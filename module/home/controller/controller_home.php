<?php 
$path = $_SERVER['DOCUMENT_ROOT'] . '/web';
include($path . "/module/home/model/DAOHome.php");
switch ($_GET['op']) {
	case 'list';
		include("module/home/view/home1.html");
	
	break;

	case 'slider';

	try{
		$daohome = new DAOHome();
		$rlt = $daohome->select_slider();
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

	case 'categoria';

            try{
				$daohome = new DAOHome();
				$rlt = $daohome->select_categoria();
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
			
		

		case 'morevisited';

            try{
				$daohome = new DAOHome();
				$rlt = $daohome->UPDATE_cont($_GET['id']);
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

			case 'scroll_data';

            try{
				$daohome = new DAOHome();
				$rlt = $daohome->select_all_data($_GET['limit']);
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