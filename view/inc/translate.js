 
  function cambiarIdioma(lang) {
    // Habilita las 2 siguientes para guardar la preferencia.
    language = lang || localStorage.getItem('app-lang') || 'es';
    var elems = document.querySelectorAll('[data-tr]');
    $.ajax({
      url: 'view/inc/'+language+'.json',
      type: 'POST',
      dataType: 'JSON',
      success: function (data) {
        for (var x = 0; x < elems.length; x++) {
          if (language != 'es')
            elems[x].innerHTML = data[language][elems[x].dataset.tr];
          else 
            elems[x].innerHTML = elems[x].dataset.tr;
        }
      }
  })
    localStorage.setItem('app-lang', language);
  }

  $( document ).ready(function() {
    cambiarIdioma();


    $(".españa").on("click", function(){
      cambiarIdioma('es');
    });



    $(".engl").on("click", function(){
      cambiarIdioma('en');
    });
});