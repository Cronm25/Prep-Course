// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var num=array.length;
  return num;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i =0 ; i < array.length; i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase=palabras[0];
  if(palabras.length>1){
    for(i=1;i<palabras.length;i++){
      frase=frase+" "+palabras[i];
    }
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i=1;i<array.length-1;i++){
    if(array[i]===elemento){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for(i=0;i<numeros.length;i++){
    suma=suma+numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma_de_test=0, promedio_=0;
  
  for(i=0;i<resultadosTest.length;i++){
    suma_de_test=suma_de_test+resultadosTest[i];
  }
  promedio_=suma_de_test/resultadosTest.length;
  return promedio_;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mas_grande=0;
  for(i=0;i<numeros.length;i++){
    if(numeros[i]>mas_grande){
      mas_grande=numeros[i];
    }
  }
  return mas_grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var largo=arguments.length,producto=1;
  if(largo>1){
    for(i=0;i<largo;i++){
      producto=producto*arguments[i];
    }
    return producto;
  }else if(largo==1){
    return arguments[0]
  }else{
    return 0;
  }
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad_=0;
  for(i=0;i<arreglo.length;i++){
    if(arreglo[i]>18){
      cantidad_++;
    }
  }
  return cantidad_;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  var labora="Es dia Laboral", finde="Es fin de semana";
  switch(numeroDeDia){
    case 1:
      return finde;
    case 2:
      return labora;
    case 3:
      return labora;
    case 4:
      return labora;
    case 5:
      return labora;
    case 6:
      return labora;
    case 7:
      return finde;
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var es_=n.toString();
  if(es_[0]==9){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var igual=arreglo[0];
  for(i=0;i<arreglo.length;i++){
    if(arreglo[i]!==igual){
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var new_=["Enero","Marzo","Noviembre"],
  ene="Enero",mar="Marzo",nov="Noviembre";
  for(i=0;i<array.length;i++){
    switch(array[i]){
      case "Enero":
        for(i=0;i<array.length;i++){
          switch(array[i]){
            case "Noviembre":
              for(i=0;i<array.length;i++){
                if(array[i]=="Marzo"){
                  new_=[ene,nov,mar];
                  return new_;
                }
              }
              break;
            case "Marzo":
              for(i=0;i<array.length;i++){
                if(array[i]=="Noviembre"){
                  new_=[ene,mar,nov];
                  return new_;
                }
              }
              break;
          }
        }
      case "Marzo":
        for(i=0;i<array.length;i++){
          switch(array[i]){
            case "Enero":
              for(i=0;i<array.length;i++){
                if(array[i]=="Noviembre"){
                  new_=[mar,ene,nov];
                  return new_;
                }
              }
              break;
            case "Noviembre":
              for(i=0;i<array.length;i++){
                if(array[i]=="Enero"){
                  new_=[mar,nov,ene];
                  return new_;
                }
              }
              break;
          }
        }
      case "Noviembre":
        for(i=0;i<array.length;i++){
          switch(array[i]){
            case "Marzo":
              for(i=0;i<array.length;i++){
                if(array[i]=="Enero"){
                  new_=[nov,mar,ene]
                  return new_;
                }
              }
              break;
            case "Enero":
              for(i=0;i<array.length;i++){
                if(array[i]=="Marzo"){
                  new_=[nov,ene,mar]
                  return new_;
                }
              }
              break;
            
          }
        }
      }
  }
  var rp="No se encontraron los meses pedidos";
  return rp;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevo_array=[];
  for(i=0;i<array.length;i++){
    if(array[i]>100){
      nuevo_array.push(array[i]);
    }
  }
  return nuevo_array;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var suma_=numero,guardados=[],txt="Se interrumpió la ejecución";
  for(i=0;i<10;i++){
    suma_=suma_+2;
    if(i==suma_){
      return txt;
    }
    guardados.push(suma_);
  }
  return guardados;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array_=[],suma_2=numero;
  for(i=0;i<10;i++){
    if(i===5){
      continue;
    }
    suma_2=suma_2+2;
    array_.push(suma_2);
  }
  return array_;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
