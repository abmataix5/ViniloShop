function validate_userUP() {
	if (document.update_user.cod_grupo.value.length==0){
	    document.getElementById('e_cod_grupo').innerHTML = "Tiene que escribir el codigo del grupo";
	    document.update_user.cod_grupo.focus();
	    return 0;
    }
    document.getElementById('e_cod_grupo').innerHTML = "";
    
    if (document.update_user.fecha_estreno.value.length==0){
	    document.getElementById('e_fecha_estreno').innerHTML = "Tiene que indicar la fecha de estreno del disco";
	    document.update_user.fecha_estreno.focus();
	    return 0;
    }
    document.getElementById('e_fecha_estreno').innerHTML = "";
    
    if (document.update_user.nombre_grupo.value.length==0){
	    document.getElementById('e_nombre_grupo').innerHTML = "Indica el nombre del grupo";
	    document.update_user.nombre_grupo.focus();
	    return 0;
    }
    document.getElementById('e_nombre_grupo').innerHTML = "";
    
    if (document.update_user.nombre_disco.value.length==0){
	    document.getElementById('e_nombre_disco').innerHTML = "Indica el nombre del disco";
	    document.update_user.nombre_disco.focus();
	    return 0;
    }
    document.getElementById('e_nombre_disco').innerHTML = "";
    
    if (document.update_user.estilo_musical.value.length==0){
	    document.getElementById('e_estilo_musical').innerHTML = "Tiene que escribir el estilo musical";
	    document.update_user.estilo_musical.focus();
	    return 0;
    }
	document.getElementById('e_estilo_musical').innerHTML = "";
	
	if (document.update_user.cod_compra.value.length==0){
	    document.getElementById('e_cod_compra').innerHTML = "Tiene que escribir el codigo de compra";
	    document.update_user.cod_compra.focus();
	    return 0;
    }
    document.getElementById('e_cod_compra').innerHTML = "";
    
    
   
	document.update_user.submit();
	document.update_user.action="index.php?page=controller_stock&op=update"; // cambi de redireccionament, en el cas del update, diferent
}