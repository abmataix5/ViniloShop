function valide_login(){
	if(document.formlogin.username.value.length === 0){
		document.getElementById('e_user').innerHTML = "Tienes que escribir el usuario";
		document.formlogin.username.focus();
		return 0;
	}
	document.getElementById('e_user').innerHTML = "";

	if(document.formlogin.password.value.length === 0){
		document.getElementById('e_password').innerHTML = "Tienes que escribir la contraseña";
		document.formlogin.password.focus();
		return 0;
	}
	document.getElementById('e_password').innerHTML = "";
}

function valide_register(){
	var mailp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	
	if(document.formregister.username.value.length === 0){
		document.getElementById('e_userr').innerHTML = "Tienes que escribir el usuario";
		document.formregister.username.focus();
		return 0;
	}
	if(document.formregister.username.value.length <= 2){
		document.getElementById('e_userr').innerHTML = "El usuario tiene que tener más de 2 caracteres";
		document.formregister.username.focus();
		return 0;
	}
	document.getElementById('e_userr').innerHTML = "";

    if(document.formregister.email.value.length === 0){
		document.getElementById('e_mail').innerHTML = "Tienes que escribir el mail";
		document.formregister.email.focus();
		return 0;
	}
	if(!mailp.test(document.formregister.email.value)){
		document.getElementById('e_mail').innerHTML = "El formato del mail es invalido";
		document.formregister.email.focus();
		return 0;
	}
	document.getElementById('e_mail').innerHTML = "";

	

	if(document.formregister.password.value.length === 0){
		document.getElementById('e_passwordr').innerHTML = "Tienes que escribir la contraseña";
		document.formregister.password.focus();
		return 0;
	}
	if(document.formregister.password.value.length < 6){
		document.getElementById('e_passwordr').innerHTML = "La contraseña tiene que tener más de 6 caracteres";
		document.formregister.password.focus();
		return 0;
	}
	document.getElementById('e_passwordr').innerHTML = "";

	if(document.formregister.password2.value.length === 0){
		document.getElementById('e_rpasswordr').innerHTML = "Tienes que escribir la contraseña";
		document.formregister.password2.focus();
		return 0;
	}
	if(document.formregister.password2.value != document.formregister.password.value){
		document.getElementById('e_rpasswordr').innerHTML = "La contraseña tiene que ser la misma";
		document.formregister.password2.focus();
		return 0;
	}
	document.getElementById('e_rpasswordr').innerHTML = "";
}

function logoutauto(){
	$.ajax({
		type : 'GET',
		url  : 'components/login/controller/controller-login.php?&op=logout',
	})
	.done(function() {
		localStorage.removeItem('user');
		localStorage.removeItem('avatar');
		localStorage.removeItem('type');
		localStorage.removeItem('email');
		setTimeout(' window.location.href = "index.php?page=controllerhome&op=list"; ',1000);
	})
}



function register_click(){

	$('#register_btn').on('click', function (e) {
        
		e.preventDefault();
		if (valide_register() != 0) {
			console.log("dentro");
			var data = $(".formregister").serialize();
			$.ajax({
				type : 'POST',
				url  : 'module/login/controller/controller_login.php?&op=register&' + data,
				data : data,
				beforeSend: function(){	
					console.log(data);
					$("#error_register").fadeOut();
				},
				success: function(response){	
					console.log(response);					
					if(response==="All ok"){
					/* lo mandamos al login para que inicie sesion */
						setTimeout(' window.location.href = "index.php?page=controller_home&op=list"; ',1000); 
					}else if (response=="okay") {
						alert("Debes realizar login para completar tu compra");
						setTimeout(' window.location.href = window.location.href; ',1000);
					}else{
						$("#error_register").fadeIn(1000, function(){						
							$("#error_register").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+'</div>');
						});
					}
			  }
			});
		}
    });
}


function register_enter(){
	$("#register_btn").keypress(function(e) {
		console.log("yes");
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code==13){
			e.preventDefault();
			if (valide_register() != 0) {
				console.log("dentro");
				var data = $(".formregister").serialize();
				$.ajax({
					type : 'POST',
					url  : 'module/login/controller/controller_login.php?&op=register&' + data,
					data : data,
					beforeSend: function(){	
						console.log(data);
						$("#error_register").fadeOut();
					},
					success: function(response){	
						console.log(response);					
						if(response==="ok"){
						/* lo mandamos al login para que inicie sesion */
							setTimeout(' window.location.href = "index.php?page=controller_login&op=login_list"; ',1000);
						}else if (response=="okay") {
							alert("Debes realizar login para completar tu compra");
							setTimeout(' window.location.href = window.location.href; ',1000);
						}else{
							$("#error_register").fadeIn(1000, function(){						
								$("#error_register").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+'</div>');
							});
						}
				  }
				});
			}
        }
    });
}


function login_click(){
	$('#login_btn').on('click', function (e) {

        console.log("ready full login");
		e.preventDefault();
		if(valide_login() != 0){
			var data = $(".formlogin").serialize();// pillem tots els datos del form de una
			console.log(data);	
			$.ajax({
				type : 'POST',
				url  : 'module/login/controller/controller_login.php?&op=login&' + data,
				data : data,
				beforeSend: function(){	
					$("#error_login").fadeOut();
				},
				success: function(token_return){
						
			   		console.log(token_return);		
					if(token_return!="El usuario no existe"){
						console.log("tamo bien");
						localStorage.setItem("token", token_return);
				
					 	setTimeout(' window.location.href = "index.php?page=controller_home&op=list"; ',1000); 
					}else{
						console.log("Error en login token");
					}
				}
			});
		}
    });
}

$(document).ready(function(){


  /*   function register(){ */
	register_click();
	register_enter();
	login_click();
 /*   } */
});
