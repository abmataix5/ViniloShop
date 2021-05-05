<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/web';

	 
/* 	@session_start(); */

    switch ($_GET['op']) {
		case 'cart_list':
            include("module/cart/view/cart.html");
			break;

	



	}
