function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData
        }).done((data) => {
            resolve(data);
        }).fail((jqXHR, textStatus, errorThrow) => {
            reject(jqXHR.responseText);
        });
    });
}
console.log("utils");



function loadMenu() {

    if(localStorage.getItem('token') != null){
    var token = localStorage.getItem('token');
    var token2 = token.split(" ");
    var token = token2[0].replace(/['"]+/g,'');  
    console.log(token);
   
       ////////// return user //////////////////
       
       ajaxPromise('module/login/controller/controller_login.php?&op=menu'  , 'POST', 'JSON', { "token": token,  })
       
  
       .then(function(data) {
    
           console.log( data);

           if (data[0].tipo === 'admin') {
            console.log("menu admin");

            /* Quitamos la opcion login ya que ya se ha logueado */
        
                $('#icon_login').remove();
        
            /* Añadimos icono perfil avatar */
             $('<li></li>').attr({}).html('<div class="div2" style = "background : url(' + data[0].avatar + ') "></div> <p>'+data[0].username+' </p> ').appendTo('#menu_bar_login');
             
                  

   
   
           }else if (data[0].tipo === 'client') {

            console.log("dentro tipo cliente");

            /* Añadimos icono perfil avatar */
            $('<li></li>').attr({}).html('<div class="div2" style = "background : url(' + data[0].avatar + ') "></div><p>'+data[0].username+' </p>').appendTo('#menu_bar_login');
            
            
        
            /* Quitamos la opcion login ya que ya se ha logueado */
            $('#icon_login').remove();
        
            /* Quitamos la opcion stockl, solo la tendra disponible el usuario de tipo admin */
          
        
      
           }
                 
       });
    }else{

        console.log("Nadie loged");
        /* Quitamos acceso al control del Stock, ya que no hay nadie logueado */
        $('#stock_li').remove();
    }
  }
  

 

 function logOutClick() {

    $(document).on('click', '.div2', function() {
        logOut();
    });
}

function logOut() {

    console.log("K.O user");
    localStorage.removeItem('token');
    window.location.href = "index.php?page=controller_home&op=list";
    $('.div2').remove();
}



$(document).ready(function() {
    loadMenu();
    logOutClick() ;
});
