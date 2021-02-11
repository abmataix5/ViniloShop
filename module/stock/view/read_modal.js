$(document).ready(function () {
    

        


    $('.Button_black').on("click",  function () {
        var id = this.getAttribute('id');
  console.log(id);
        $.ajax({
            //data: {"parametro1" : "valor1"},
            type: "GET",
            dataType: "json",
            url: "module/stock/controller/controller_stock.php?op=read_modal&modal= "+ id,
            
        })
         .done(function( data) {
             console.log(data);
                 $('#user_modal').empty();
                //  $('#codviaje').html(data.nombre);
                 $('<div></div>').attr('id','Div1').appendTo('#user_modal');
                //  $('<div></div>').attr('id','Div2').appendTo('#user_modal');
                //  $('<div></div>').attr('id','preciocasa').appendTo('#user_modal');
                
                 $("#Div1").html(
                            '<br><span>Codigo del producto:   <span id="cod_producto">'+data.cod_producto+'</span></span></br>'+
                            '<br><span>Codigo del grupo:   <span id="cod_grupo">'+data.cod_grupo+'</span></span></br>'+
                            '<br><span>Fecha estreno:     <span id="fecha_estreno">'+data.fecha_estreno+'</span></span></br>'+
                            '<br><span>Nombre del grupo:     <span id="nombre_grupo">'+data.nombre_grupo+'</span></span></br>'+
                            '<br><span>Nombre del disco:     <span id="nombre_disco">'+data.nombre_disco+'</span></span></br>'+
                            '<br><span>Estilo musical:    <span id="estilo_musical">'+data.estilo_musical+'</span></span></br>'+
                            '<br><span>Codigo de compra:     <span id="cod_compra">'+data.cod_compra+'</span></span></br>'
  
                 )
  
                 $("#user_modal").dialog({
                    width: 850, //<!-- ------------- ancho de la ventana -->
                    height: 500, //<!--  ------------- altura de la ventana -->
                    //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
                    //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
                    resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
                    position: "down",//  ------ posicion de la ventana en la pantalla (left, top, right...) 
                    modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");
                        }
                    },
                    show: {
                        effect: "blind",
                        duration: 1000
                    },
                    hide: {
                        effect: "explode",
                        duration: 1000
                    }
                });
  
          })
      
    });
  
  });
  