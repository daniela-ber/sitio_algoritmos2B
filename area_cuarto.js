function calcularArea () {

var nombreDeVariable; 
var largo; 
var ancho; 
var area_metros; 
var area_pies;


var campo_de_texto= document.getElementById("ancho");
var texto = campo_de_texto.value;
ancho = parseFloat(texto);

campo_de_texto = document.getElementById ("largo")
texto = campo_de_texto.value;
largo = parseFloat(texto);

area_metros= ancho * largo;
area_pies = area_metros;
alert ("Area en metros cuadrados"+ area_metros + ". Area en pies" + area_pies)
}






