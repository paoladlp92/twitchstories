var colors = [
  "brown",
  "blue",
  "magenta",
  "teal",
  "coral",
];   
//Display lo que ya esta en las bases
$.ajax({
    method: "GET",
    //consigue base de datos works onluy with submit2?
    url: "/submit2",
    //en formato json
    contentType: "application/json",
    dataType: 'json',
    //pone la info
  }).then(function (response) {
    console.log(response);
    //document.getElementById("entriesHere").append(response.entry);
    //'e' can be any name
    //para cada cosa
    response.forEach(e => {
    var targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
    var entries = $("#entriesHere");
    var wordz = $("<span>");
      //referencia a bases de datos
    wordz.text(e.entry + " ");
    wordz.addClass(".wordz");
    wordz.css('color', targetColorOfText);
    entries.append(wordz);

    //Si funciona, pero se queda loading para siempre, me tengo q salir de la web y uego regresar :( y darle refresh
    //ayuda con la funcion post de abajo, pero aun no se refresh
    
    });

  });

  