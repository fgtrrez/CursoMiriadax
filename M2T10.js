//M2T10
/*
Añadir un método listar() al cierre agenda(..) {...} que liste por consola cada par "nombre, tf" en una línea, de forma que al listar la agenda amigos generase:
 
"Pepe, 113278561 \nJosé, 157845123 \nJesús: 178512355 \n"
 
incluir ademas una última instrucción en el programa que liste la agenda amigos por consola utilizando el nuevo método listar.
*/

function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
  var result = "";
 
  return {
    titulo: function()           { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre)     { return _contenido[nombre]; },
    borrar: function(nombre)     { delete _contenido[nombre]; },
    toJSON: function()           { return JSON.stringify(_contenido);},
    listar: function()		 { for (var i in _contenido) {result += i + ": " + _contenido[i] +"\n";}; return JSON.stringify(result);}
  }
}
var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });

console.log(amigos.listar());


/*
var o = {a:1, b:2, c:3};
function show_props(obj, objName) { 
   var result = ""; 
   for (var i in obj) { 
      result += objName + "." + i + " = " + obj[i] + "\n"; 
   } 
   return result; 
} 
alert(show_props(o, "o"));
*/
