function validate_user() {
	if (document.alta_user.cod_grupo.value.length==0){
	    document.getElementById('e_cod_grupo').innerHTML = "Tiene que escribir el codigo del grupo";
	    document.alta_user.destino.focus();
	    return 0;
    }
    document.getElementById('e_cod_grupo').innerHTML = "";
    
    if (document.alta_user.fecha_estreno.value.length==0){
	    document.getElementById('e_fecha_estreno').innerHTML = "Tiene que indicar la fecha de estreno del disco";
	    document.alta_user.numpers.focus();
	    return 0;
    }
    document.getElementById('e_fecha_estreno').innerHTML = "";
    
    if (document.alta_user.nombre_grupo.value.length==0){
	    document.getElementById('e_nombre_grupo').innerHTML = "Indica el nombre del grupo";
	    document.alta_user.nombre_grupo.focus();
	    return 0;
    }
    document.getElementById('e_nombre_grupo').innerHTML = "";
    
    if (document.alta_user.nombre_disco.value.length==0){
	    document.getElementById('e_nombre_disco').innerHTML = "Indica el nombre del disco";
	    document.alta_user.nombre_disco.focus();
	    return 0;
    }
    document.getElementById('e_nombre_disco').innerHTML = "";
    
    if (document.alta_user.estilo_musical.value.length==0){
	    document.getElementById('e_estilo_musical').innerHTML = "Tiene que escribir el estilo musical";
	    document.alta_user.estilo_musical.focus();
	    return 0;
    }
	document.getElementById('e_estilo_musical').innerHTML = "";
	
	if (document.alta_user.cod_compra.value.length==0){
	    document.getElementById('e_cod_compra').innerHTML = "Tiene que escribir el codigo de compra";
	    document.alta_user.cod_compra.focus();
	    return 0;
    }
    document.getElementById('e_cod_compra').innerHTML = "";
    
    
   
	document.alta_user.submit();
	document.alta_user.action="index.php?page=controller_stock&op=create"; // cambi de redireccionament, en el cas del update, diferent
}