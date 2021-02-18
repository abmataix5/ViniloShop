<?php 
$path = $_SERVER['DOCUMENT_ROOT'] . '/web';
include($path . "/module/contact/model/DAOContact.php");



switch ($_GET['op']) {
	case 'list';
		include("module/contact/view/contact.html");
	
	break;

	
	}