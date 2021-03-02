$(document).ready(function () {
    console.log("entra en el search")

    $.ajax({ 
type: "GET",
dataType: "json",
url: "module/search/controller/controller_search.php?op=por_fecha" 
})

.done(function( data, textStatus, jqXHR ) {
console.log( data );
var $drop = $("#search_catego");
//$drop.empty();

$.each(data, function(i, item) {///bucle para rellenar el dropdown1
    //console.log( item);
    $drop.append("<option>" + item.categoria + "</option>")        
});
});

$("#search_catego").on("change", function () {
    var valCatego = $(this).val();
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/search/controller/controller_search.php?op=por_catego&id=" + valCatego, 
    })
    .done(function( data) {
        //console.log( data );
        var $drop2 = $("#search_estilo");
        $drop2.empty();
        $drop2.append("<option value=false>" + "Estilo musical" + "</option>");
        $.each(data, function(i, item) {///bucle para rellenar el dropdown1
        // console.log( item);
            $drop2.append("<option>" + item.estilo_musical + "</option>")
        });
    });
});

$("#autocom").on("keyup", function () {
    var auto=$(this).val();///valor de lo que estamos escribiendo
    var drop2=$("#search_estilo").val();// valor del combo de localidades
    var autCom = {auto: auto, drop2: drop2}; 
    $.ajax({
        type: "POST",
        url: "module/search/controller/controller_search.php?op=autocomplete",  
        data: autCom,
    })
    .done(function( data, textStatus, jqXHR ) {
         console.log(data);
        $('#opauto').fadeIn(1000).html(data);// se ve
        ///si selecciono valor
        $('.autelem').on('click', function(){
            var id = $(this).children('a').attr('id');
            console.log(id);
            $('#autocom').val(id);
            //$('#autocom').val($('#'+id).attr('data'));
            $('#opauto').fadeOut(1000);
        });
        ///si click fuera se borra value y se cierra
        $("#contenido, .slider__img").on('click', function(){
            $('#opauto').fadeOut(1000);
            $('#autocom').val("");
        });
    });
});

//// boton de buscar
$("#searchlist").on("click", function (){
    console.log("olaaas");
    var drop = $("#search_catego").val();
    var drop2=$("#search_estilo").val();
    var auto=$("#autocom").val();
    console.log("ye");
    console.log(drop2);
    console.log(auto);
    
    localStorage.setItem('search_catego', drop); // save data
    localStorage.setItem('search_estilo', drop2); // save data
    localStorage.setItem('val', auto); // save data

    if((drop==0)&&(drop2==0)&&(auto==="")){
        // console.log("ingresa criterios de busqueda");
        toastr["info"]("Ingresa criterios de busqueda"),{"iconClass":'toast-info'};
    }else{
        window.location.href = 'index.php?page=controller_shop&op=list';
    }
});
});