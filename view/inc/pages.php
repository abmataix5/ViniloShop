<?php


if(!isset($_GET['page'])){
	$_GET['page']="controller_home";
}
	switch($_GET['page']){
	
		case "controller_home";
			include("module/home/controller/".$_GET['page'].".php");
			break;
		case "controller_stock";
			include("module/stock/controller/".$_GET['page'].".php");
            break;
        case "controller_shop";
			include("module/shop/controller/".$_GET['page'].".php");
			break;
			case "controller_order";
			include("module/stock_order/controller/".$_GET['page'].".php");
			break;
		case "404";
			include("view/inc/error".$_GET['page'].".php");
			break;
		case "503";
			include("view/inc/error".$_GET['page'].".php");
			break;
		default;
			include("module/home/controller/".$_GET['page'].".php");
			break;
	}
?>