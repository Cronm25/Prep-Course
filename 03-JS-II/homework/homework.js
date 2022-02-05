// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x>y){
    return x;
  }else{
    return y;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var AL="Allowed", Not_a="Not allowed";
  if(edad>=18){
    return AL;
  }else{
    return Not_a;
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var On="Online", Aw="Away", Off="Offline";
  if(status===1){
    return On;
  }else if(status===2){
    return Aw;
  }else{
    return Off;
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var ale="Guten Tag!", man="Ni Hao!", ing="Hello!", und="Hola!";
  if(idioma==="aleman"){
    return ale;
  }else if(idioma==="mandarin"){
    return man;
  }else if(idioma==="ingles"){
    return ing;
  }else if(idioma==="undefined" || idioma !=="aleman" || idioma !=="mandarin" || idioma !=="ingles" ){
    return und;
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var blue="This is blue", red="This is red", green="This is green", orange="This is orange",defau="Color not found";
  switch(color){
    case "blue":
      return blue;
    case "red":
      return red;
    case "green":
      return green;
    case "orange":
      return orange;
    default:
      return defau;
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero===10 || numero===5){
    return true
  }else{
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero<50 && numero>20){
    return true;
  }else{
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if(Math.floor(numero)===numero){
    return true;
  }else{
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var tress=numero/3,cincoo=numero/5;
  var fibu="fizzbuzz", fi="fizz", bu="buzz";
  if(Math.floor(tress)===tress && Math.floor(cincoo)===cincoo){
    return fibu;
  }else if(Math.floor(tress)===tress){
    return fi;
  }else if(Math.floor(cincoo)===cincoo){
    return bu;
  }else{
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var mayor_Y_positivo="Número 1 es mayor y positivo", hay_negativos="Hay negativos"
      error_0="Error";
  if(num1>num2 && num1>num3 && num1>0 && num2>0 && num3>0){
    return mayor_Y_positivo;
  }else if(num1<0 || num2<0 || num3<0){
    return hay_negativos;
  }else if(num3>num1 && num3>num2 && num1!==0 && num2!==0 && num3!==0){
    ++num3;
    return num3;
  }else if(num1===0 || num2===0 || num3===0){
    return error_0;
  }else{
    return false;
  }
  
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  
  if(numero == 0 || numero == 1 || numero == null){
    return false;
  }
  for(let i = 2 ; i<=numero ; i++){
    var resul=numero/i;
    if(Math.floor(resul)===resul && numero==i){
      return true; 
    }else if(Math.floor(resul)==resul ){
      return false;
    }
  } 
}


function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var Soy_v="Soy verdadero",Soy_f="Soy falso";
  if(valor){
    return Soy_v;
  }else{
    return Soy_f;
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  var Tabla_6 = new Array(10); 
  for(var i=0 ; i<=10; i++){
    Tabla_6[i]=6*i;
  }
  return Tabla_6;
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var cantidad=numero.toString().length;
  if(cantidad==3){
    return true;
  }else{
    return false;
  }

  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i=0,resu1=numero;
  while(i<8){
    resu1=resu1+5;
    ++i;
  }
  return resu1;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
