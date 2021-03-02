<?php



if ((isset($_GET['page'])) && ($_GET['page']==="controller_home") ){
	include("view/inc/top_page_home.php");
}


else if ((isset($_GET['page'])) && ($_GET['page']==="controller_stock") ){
	include("view/inc/top_page_discos.php");
}
else if ((isset($_GET['page'])) && ($_GET['page']==="controller_shop") ){
	include("view/inc/top_page_shop.php");
}
else if ((isset($_GET['page'])) && ($_GET['page']==="controller_order") ){
	include("view/inc/top_page_order.php");
}else if ((isset($_GET['page'])) && ($_GET['page']==="controller_contact") ){
	include("view/inc/top_page_contact.php");
}

else{
		

	include("view/inc/top_page_home.php");

}
    
	session_start();
?>
<div id="wrapper">		
    <div id="header">    	
    	<?php
    	    include("view/inc/header.php");
    	?>        
    </div>  
    <!-- <div id="menu">
		<?php
		    // include("view/inc/menu.php");
		?>
    </div>	 -->
    <div id="">
    	<?php 
		    include("view/inc/pages.php"); 
		?>        
        <br style="clear:both;" />
    </div>
    <div id="footer">   	   
	    <?php
	        include("view/inc/footer.php");
	    ?>        
    </div>
</div>
