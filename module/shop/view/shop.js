
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
        '<input type="checkbox" class="check_grupo" id ="'+data_filtros[index].cod_grupo+'">'+
        '<span class="span" >'+data_filtros[index].nombre_grupo+'</span>'+
         '</li>';
    
      }
      $('#filtros').html(element);
    })
        
  }


/* Hla filtro */

function filtros(){

  var checks = "";
  var count1 = 0, count2 = 0,count3 = 0, count4 = 0,count5 = 0, count6 = 0, count7 = 0, count8 = 0, count9 = 0;
  

  //////////////////////////////////////////// POR ESTILO MUSICAL /////////////////////////////////////////////////////////////////////////
  $('#check_rock').click(function () {
    console.log("Debug Check1");
        if(checks === ""){
    
            checks = "estilo_musical = 'Rock'";
            count1=count1+1;

        }else if(count1 == 1){
            checks = checks.replace("OR estilo_musical = 'Rock'", "");
            checks = checks.replace("estilo_musical = 'Rock'", "");
            count1=0;
            }else{
                checks = checks + "OR estilo_musical = 'Rock'";
                count1=count1+1;
        }
    });

    $('#check_pop').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Pop'";
            count2=count2+1;

        }else if(count2 == 1){
            checks = checks.replace("OR estilo_musical = 'Pop'", "");
            checks = checks.replace("estilo_musical = 'Pop'", "");
            count2=0;
            }else{
                checks = checks + "OR estilo_musical = 'Pop'";
                count2=count2+1;
        }
    });
    $('#check_electronica').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Electronica'";
            count3=count3+1;

        }else if(count3 == 1){
            checks = checks.replace("OR estilo_musical = 'Electronica'", "");
            checks = checks.replace("estilo_musical = 'Electronica'", "");
            count3=0;
            }else{
                checks = checks + "OR estilo_musical = 'Electronica'";
                count3=count3+1;
        }
    });

    $('#check_clasica').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Clasica'";
            count4=count4+1;

        }else if(count4 == 1){
            checks = checks.replace("OR estilo_musical = 'Clasica'", "");
            checks = checks.replace("estilo_musical = 'Clasica'", "");
            count4=0;
            }else{
                checks = checks + "OR estilo_musical = 'Clasica'";
                count4=count4+1;
        }
    });
    $('#check_rap').click(function () {
        console.log("Debug Check2");
        if(checks === ""){
            checks = "estilo_musical = 'Rap'";
            count5=count5+1;

        }else if(count5 == 1){
            checks = checks.replace("OR estilo_musical = 'Rap'", "");
            checks = checks.replace("estilo_musical = 'Rap'", "");
            count5=0;
            }else{
                checks = checks + "OR estilo_musical = 'Rap'";
                count5=count5+1;
        }
    });


  /////////////////////////////////POR Categoria/////////////////////////////

  $('#check_disco').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Disco'";
        count6=count6+1;

    }else if(count6 == 1){
        checks = checks.replace("AND categoria = 'Disco'", "");
        checks = checks.replace("categoria = 'Disco'", "");
        count6=0;
        }else{
            checks = checks + "AND categoria = 'Disco'";
            count6=count6+1;
    }
});
$('#check_vinilo').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Vinilo'";
        count7=count7+1;

    }else if(count7 == 1){
        checks = checks.replace("AND categoria = 'Vinilo'", "");
        checks = checks.replace("categoria = 'Vinilo'", "");
        count7=0;
        }else{
            checks = checks + "AND categoria = 'Vinilo'";
            count7=count7+1;
    }
});

 

  $('#check_camiseta').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Camiseta'";
        count8=count8+1;

    }else if(count8 == 1){
        checks = checks.replace("AND categoria = 'Camiseta'", "");
        checks = checks.replace("categoria = 'Camiseta'", "");
        count8=0;
        }else{
            checks = checks + "AND categoria = 'Camiseta'";
            count8=count8+1;
    }
});

$('#check_poster').click(function () {
    console.log("Debug Check2");
    if(checks === ""){
        checks = "categoria = 'Poster'";
        count9=count9+1;

    }else if(count9 == 1){
        checks = checks.replace("AND categoria = 'Poster'", "");
        checks = checks.replace("categoria = 'Poster'", "");
        count9=0;
        }else{
            checks = checks + "AND categoria = 'Poster'";
            count9=count9+1;
    }
});




//////////////////////////////Boton para filtrar///////////////////////
  $('#filtrar_check').click(function () {
  console.log("Debug enviar");
  if(checks === ""){
      console.log("olaasas");
      $('#container_shop').empty();
      ajaxForSearch("module/shop/controller/controller_shop.php?op=data_shop");

  }else{
      $('#container_shop').empty();
      ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + checks);
  }
  });

}



$('#barato').click(function () {
    console.log("Debug PRECIO");

});

/* Clicks filtros */

/*   function filtros(){
    var count_click = 0;
    var check_filtros = "";

        $(document).on('click','.check_grupo',function () {

        var grupo = this.getAttribute('id');
        localStorage.setItem('grupo',JSON.stringify(grupo));
       
       var grupo2 =JSON.parse(localStorage.getItem('grupo'));
      
      console.log(grupo);
      console.log(grupo);
      

  
        var check_filtros = grupo;

        console.log(check_filtros);
                if(check_filtros ===  grupo2 ){
                ajaxForSearch("module/shop/controller/controller_shop.php?op=op_filtros&checks=" + check_filtros);
                count_click = count_click + 1;
                console.log(count_click);
                } else if(check_filtros !=  grupo2){
                  check_filtros = grupo2;
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

  } */



  /* carga src api */

  function api_maps() {

    if (document.getElementById('cargar_maps') != null) {
        
      var script = document.createElement('script');
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + "AIzaSyDGZQiAiNiB8a3IicipOMsvpb0tIMab2aM";
      script.async;
      script.defer;
      document.getElementsByTagName('script')[0].parentNode.appendChild(script);
      console.log(script + "Script src maps");
    }
  }


  /* Carregar maps */

  function map_shop(){

    $(document).on('click','.mapdetails',function () {

        $('<div></div>').attr({'id': 'mapshop', }).appendTo('#cargar_maps');

        $('#all_maps').empty();
        $('.side-bar').empty();
        
        console.log("olamaps");

     
       $.ajax({
    
        type: "GET",
        dataType: "json",
        url: "module/shop/controller/controller_shop.php?op=data_shop",
      
      })
      
     
       .done(function( data_map ) {
           console.log(data_map);
                var markers = [];
    
                function initialize() {
    
                
    
                    var map = new google.maps.Map(document.getElementById('mapshop'), {
                        zoom: 2,
                        center: new google.maps.LatLng(	40.4636688, 	-3.7492199),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                
                    var infowindow = new google.maps.InfoWindow();
    
                    for (var i = 0  ; i < data_map.length; i++) {
                    console.log(data_map.latitud);
    
                        var newMarker = new google.maps.Marker({
                            position: new google.maps.LatLng(data_map[i].latitud, data_map[i].longitud),
                            map: map,
                            title: data_map[i].destino
                        });
    
                        google.maps.event.addListener(newMarker, 'click', (function (newMarker, i) {
                            return function () {
                                var infomap = '<div><p>'+data_map[i].categoria+'</p><br>Precio : '+data_map[i].precio+'<br><img src="'+data_map[i].ruta+'"></div>'
                                // infowindow.setContent( data_map[i].destino);
                                infowindow.setContent(infomap);
                                infowindow.open(map, newMarker);
                            
                            }
                        })(newMarker, i));
    
                        markers.push(newMarker);
                    }
    }
    
    
    initialize();
    })// end done
    
    });
    }



/* Document ready con funciones anteriores */

$(document).ready(function(){

   salto_categorias();
   filtros();
   pintar_filtros_nomgrupo();
   api_maps();
   map_shop(); 

});















 