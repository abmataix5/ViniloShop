
/* Function carousel, later call them -> document ready */

  function carousel_owl(){



     
    $.ajax({ 
      type: 'GET', 
      url: 'module/home/controller/controller_home.php?op=slider',
      async:false, 
      dataType: 'json',
      
      success: function (data) { 
          for (var i = 0; i < 7; i++) {
            console.log(data);
              $('#caorusel').append(
              
                          '<img id="carousel_shop"  src="'+data[i].ruta+'">'
                          
                    
              )
           }
      },
  
    });
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }

   })

   }
  

   /* Function categories */
   
////////////////////////////////////////////
    function categories(){

      $.ajax({

        type: "GET",
        dataType: "json",
        url: "module/home/controller/controller_home.php?op=categoria",
      
      })
      
      .done(function( data2) {
      
        console.log(data2);
      
      
        var element = "";
        for (let index = 0; index < data2.length; index++) {
      
          element = element +'<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">  <img  src="'+data2[index].ruta+'" class="img-thumbnail" alt="">  <div class="banner-right-icon">  <button id="salto_shop" class="'+data2[index].categoria+'">'+data2[index].categoria+'</button> </div>   </div>';
      
        }
        $('#categories').html(element);
      })
          
    }


    /* Click contador morevisited */
    
    $(document).on('click','#salto_shop',function () {

      var id = this.getAttribute('class');;
      console.log(id + "estamos"); 
      $.ajax({
      
        type: "GET",
        dataType: "json",
        url: "module/home/controller/controller_home.php?op=morevisited&id=" + id,
      
      });
      
        
      
       });

/* Salto al shop */

    $(document).on('click','#carousel_shop',function () {


      
      setTimeout('window.location.href = "index.php?page=controller_shop&op=list"',1000);
      
        
      
       });

       /* Salto al shop */

    $(document).on('click','#salto_more',function () {


      
      setTimeout('window.location.href = "index.php?page=controller_shop&op=list"',1000);
      
        
      
       });

       
/* Salto al shop */

    $(document).on('click','#salto_shop',function () {


      var categoria = this.getAttribute('class');
      
      console.log(categoria);
      
      localStorage.setItem('categoria',JSON.stringify(categoria));
      
      setTimeout('window.location.href = "index.php?page=controller_shop&op=list"',1000);
      
        
      
       });

   
    
    function more_groups(){

     var  limit = 3;
   
      $.ajax({

        type: "GET",
        dataType: "json",
        url: "module/home/controller/controller_home.php?op=scroll_data&limit=" + limit,
      
      })
      
      .done(function( data2) {
      
        console.log(data2);
      
      
        var element = "";
        for (let index = 0; index < data2.length; index++) {
      
          element = element +'<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">  <img  src="'+data2[index].img_grupo+'" class="img-thumbnail" alt="">  <div class="banner-right-icon">  <button id="salto_more" class="'+data2[index].nombre_grupo+'">'+data2[index].nombre_grupo+'</button> </div>   </div>';
      
        }
        $('#grupos_scroll').html(element);
      })

      $(document).on('click','#loadmore',function () {


     limit = limit + 3;
        
     $.ajax({

      type: "GET",
      dataType: "json",
      url: "module/home/controller/controller_home.php?op=scroll_data&limit=" + limit,
    
    })
    
    .done(function( data2) {
    
      console.log(data2);
    
    
      var element = "";
      for (let index = 0; index < data2.length; index++) {
    
        element = element +'<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">  <img  src="'+data2[index].img_grupo+'" class="img-thumbnail" alt="">  <div class="banner-right-icon">  <button id="salto_shop" class="'+data2[index].nombre_grupo+'">'+data2[index].nombre_grupo+'</button> </div>   </div>';
    
      }
      $('#grupos_scroll').html(element);
    })
        
         });
     
    }


    
    
$(document).ready(function () {   
  carousel_owl();
  categories();
 /*  scroll_grupos(); */
 more_groups();

    });