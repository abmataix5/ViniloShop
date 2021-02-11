
/* Funcion ajaxforsearch */
  function ajaxForSearch(durl) {
    var url=durl;
    console.log(url);
    $.ajax({
       type: "GET",
       dataType: "JSON",
       url:url,
   })


   .done(function( data_shop ) {
       console.log(data_shop);

       /* Entra aquú cuando hay más de unj producto*/

       if(data_shop.length > 1){
         $('#container_shop').empty();
       
         var element ="";
         for(var i=0; i < data_shop.length; i++){
 
            element = element +' <img class="imga1" id="'+data_shop[i].cod_producto+'" src="'+data_shop[i].ruta+'">';
 
       
          
         }  
         $('#container_shop').html(element);        
       
    /* Entra aquí cuando no hay ningun producto  */

        }else if(data_shop.length < 1) {
           $('#container_shop').empty();
            var no_existe  = "";
            no_existe = '<h4 >No tenemos ningun producto disponible con esas caracterisiticas</h4>'
            $('#container_shop').html(no_existe);   
        }else if(data_shop.length === 1){
           $('#container_shop').empty();
        
           var element ="";
           for(var i=0; i < data_shop.length; i++){
   
            element = element +' <img class="imga1" src="'+data_shop[i].ruta+'">';
         
            
           }  
           $('#container_shop').html(element);  
        }

        /* Details */
        else{
         $('#container_shop').empty();
        /*  $('.side-bar').empty(); */
         var single = "";
         var details = "";
      
   
    
      
       details = '<div id="details">'+
       '        <table border="2px"> '+
                    ' <tr>'+
                        '<td rowspan="7"><img  class ="img_details" src="'+data_shop.ruta+'"></td>'+
                        '<td>Codigo del producto</td>'+
                        '<td>'+data_shop.cod_producto+'</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Codigo del grupo</td>'+
                        '<td>'+data_shop.cod_grupo+'</td>'+
                    '</tr>'+

                    '<tr>'+
                        '<td>Fecha estreno</td>'+
                        '<td>'+data_shop.fecha_estreno+'</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Nombre del grupo</td>'+
                    '<td>'+data_shop.nombre_grupo+'</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Nombre del disco</td>'+
                    '<td>'+data_shop.nombre_disco+'</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Estilo musical</td>'+
                    '<td>'+data_shop.estilo_musical+'</td>'+
                    '</tr>'+

                    '<tr>'+
                    '<td>Codigo de compra</td>'+
                    '<td>'+data_shop.cod_compra+'</td>'+
                '</tr>'+
                '<tr><td><button id="volver_shop">Volver</button></td></tr>'
                
            '</table>'

       '</div>'
  
       $('#container_shop').html(details);
          
       }
   })// end done

}

/* Click details */

$(document).on('click','.imga1',function () {
    var id = this.getAttribute('id');
    console.log(id);
  
    // $('#details').empty();
   ajaxForSearch("module/shop/controller/controller_shop.php?op=list_modal&modal=  "+ id);
  
  
  });

/* Boton para volver al shop desde el details */
$(document).on('click','#volver_shop',function () {
 
    $('#details').empty();
   
   ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");
 
 
 });

/* Saltos */

function salto_categorias(){

       if (document.getElementById('container_shop')) {
       console.log("dennnnnnnnnnntro");
           var drop= JSON.parse(localStorage.getItem('categoria'));

           console.log(drop);


           if (drop===null){
               console.log("del menú");
               ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");

           } if(drop!= null && drop.length > 1){
            console.log("de categorias");
                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_categoria&categoria=" + drop);
            }


       }
        localStorage.removeItem("val");
       localStorage.removeItem("categoria");

 
}








  /* Funciónes que pinta los filtros de nombre de grupo, depende de BBDD */

  function pintar_filtros_nomgrupo(){

    $.ajax({

      type: "GET",
      dataType: "json",
      url: "module/shop/controller/controller_shop.php?op=filtro_ngrupo",
    
    })
    
    .done(function( data_filtros) {
    
      console.log(data_filtros);
      console.log("ola filtrets");
    
    
      var element = "";
      for (let index = 0; index < data_filtros.length; index++) {
    
        element = element +'<li>'+
        '<input type="checkbox" class="checked" id ="'+data_filtros[index].nombre_grupo+'">'+
        '<span class="span" >'+data_filtros[index].nombre_grupo+'</span>'+
         '</li>';
    
      }
      $('#filtros').html(element);
    })
        
  }


  function pintar_filtros_estilomusical(){

    $.ajax({

      type: "GET",
      dataType: "json",
      url: "module/shop/controller/controller_shop.php?op=filtro_estilo",
    
    })
    
    .done(function( data_filtros) {
    
      console.log(data_filtros);
      console.log("ola filtrets");
    
    
      var element = "";
      for (let index = 0; index < data_filtros.length; index++) {
    
        element = element +'<li>'+
        '<input type="checkbox" class="checked" id ="'+data_filtros[index].estilo_musical+'">'+
        '<span class="span" >'+data_filtros[index].estilo_musical+'</span>'+
         '</li>';
    
      }
      $('#filtros_estilo').html(element);
    })
        
  }

  function pintar_filtros_categoria(){

    $.ajax({

      type: "GET",
      dataType: "json",
      url: "module/shop/controller/controller_shop.php?op=filtro_categoria",
    
    })
    
    .done(function( data_filtros) {
    
      console.log(data_filtros);
      console.log("ola filtrets");
    
    
      var element = "";
      for (let index = 0; index < data_filtros.length; index++) {
    
        element = element +'<li>'+
        '<input type="checkbox" class="checked" id ="'+data_filtros[index].categoria+'">'+
        '<span class="span" >'+data_filtros[index].categoria+'</span>'+
         '</li>';
    
      }
      $('#filtros_categoria').html(element);
    })
        
  }


/* Clicks filtros */

  function filtros(){
    var count_click = 0;
    var check_filtros = "";

        $(document).on('click','#rolling',function () {
        console.log("Dentro check");
        
        var check_filtros = "Rolling Stones";

                
                if(count_click == 0){
                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + check_filtros);
                count_click = count_click + 1;
                console.log(count_click);
                } else if(count_click == 1){
                    check_filtros = check_filtros.replace("OR nombre_grupo = 'España'", "");
                    ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");
                    count_click = 0;
                }
        });


        $(document).on('click','#queen',function () {
            console.log("Dentro check");
            
            var check_filtros = "Queen";
    
                    
                    if(count_click == 0){
                    ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + check_filtros);
                    count_click = count_click + 1;
                    console.log(count_click);
                    } else if(count_click == 1){
                        check_filtros = check_filtros.replace("OR nombre_grupo = 'España'", "");
                        ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");
                        count_click = 0;
                    }
            });

            $(document).on('click','#fito',function () {
                console.log("Dentro check fito");
                
                var check_filtros = "Fito y Fitipaldis";
        
                        
                        if(count_click == 0){
                        ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + check_filtros);
                        count_click = count_click + 1;
                        console.log(count_click);
                        } else if(count_click == 1){
                            check_filtros = check_filtros.replace("OR nombre_grupo = 'España'", "");
                            ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");
                            count_click = 0;
                        }
                });

                $(document).on('click','#scorpions',function () {
                    console.log("Dentro check fito");
                    
                    var check_filtros = "Scorpions";
            
                            
                            if(count_click == 0){
                            ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + check_filtros);
                            count_click = count_click + 1;
                            console.log(count_click);
                            } else if(count_click == 1){
                                check_filtros = check_filtros.replace("OR nombre_grupo = 'España'", "");
                                ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");
                                count_click = 0;
                            }
                    });

                    $(document).on('click','#beatles',function () {
                        console.log("Dentro check fito");
                        
                        var check_filtros = "The Beatles";
                
                                
                                if(count_click == 0){
                                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + check_filtros);
                                count_click = count_click + 1;
                                console.log(count_click);
                                } else if(count_click == 1){
                                    check_filtros = check_filtros.replace("OR nombre_grupo = 'España'", "");
                                    ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");
                                    count_click = 0;
                                }
                        });

                        $(document).on('click','#cox',function () {
                            console.log("Dentro check fito");
                            
                            var check_filtros = "Carl Cox";
                    
                                    
                                    if(count_click == 0){
                                    ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + check_filtros);
                                    count_click = count_click + 1;
                                    console.log(count_click);
                                    } else if(count_click == 1){
                                        check_filtros = check_filtros.replace("OR nombre_grupo = 'España'", "");
                                        ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");
                                        count_click = 0;
                                    }
                            });

  }



/* Document ready con funciones anteriores */

$(document).ready(function(){

   salto_categorias();
   filtros();
   pintar_filtros_nomgrupo();
   pintar_filtros_estilomusical();
   pintar_filtros_categoria();


});















 