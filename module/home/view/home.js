
/* Function carousel, later call them -> document ready */

  function carousel_owl(){

    $.ajax({

      type: 'GET', 
      url: 'module/home/controller/controller_home.php?op=slider',
      async:false, 
      dataType: 'json',
    
    })
    
    .done(function( data2) {
    
      console.log(data2);
    
    
      var element = "";
      for (let index = 0; index < data2.length; index++) {
    
        element = element +'<div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">  <img  src="'+data2[index].ruta+'" class="img-thumbnail" alt="">  <div class="banner-right-icon">  <button id="salto_shop" class="'+data2[index].categoria+'">'+data2[index].categoria+'</button> </div>   </div>';
    
      }
      $('#categories').html(element);
    })

     
    $.ajax({ 
      type: 'GET', 
      url: 'module/home/controller/controller_home.php?op=slider',
      async:false, 
      dataType: 'json',
      
      success: function (data) { 
          for (var i = 0; i < 7; i++) {
            console.log(data);
              $('#caorusel').append(
              
                          '<img  src="'+data[i].ruta+'">'
                          
                    
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
      console.log(id + "yeee"); 
      $.ajax({
      
        type: "GET",
        dataType: "json",
        url: "module/home/controller/controller_home.php?op=morevisited&id=" + id,
      
      });
      
        
      
       });



    $(document).on('click','#salto_shop',function () {


      var categoria = this.getAttribute('class');
      
      console.log(categoria);
      
      localStorage.setItem('categoria',JSON.stringify(categoria));
      
      setTimeout('window.location.href = "index.php?page=controller_shop&op=list"',1000);
      
        
      
       });

   
    
    
    
$(document).ready(function () {   
  carousel_owl();
  categories();
    });