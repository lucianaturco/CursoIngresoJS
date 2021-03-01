/*
Realizar el algoritmo que permita ingresar los datos de 
una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

Estrategia:
1-declaracion de variables 
(tipo, cantidad, precio, importeBruto, importeNeto, descuento, respuesta) 
2-generar un bucle del tipo mientras el usuario quiera
-------- aca va el codigo dentro del bucle
3-pido el tipo
3.1 valido el tipo
4-pido cantidad
4.1 valido cantidad 
5-pido precio
5.1 valido precio
6- acumulo la cantidad de bolsas 
7- calculo el importe de cada iteracion (precio * cantidad de bolsas de esa iteracion)
7.1- acumulo el importe bruto
8-genero un bloque por cada tipo (arena, cal, cemento) switch
8.1-acumulo cantidades de bolsas por cada tipo 
8.2-tengo que generar un bloque al que entro en la primer iteracion
y otro donde entro en las restantes.
8.3 en la primera iteracion guardo como mayor precio el precio del primer producto
y ademas guardo EL TIPO 
------------------- despues del bucle
los descuentos
acumulamos los valores por tipo y despues vemos cual tiene mas




*/


function mostrar()
{
  let precio;
  let cantidad;
  let tipo;
  let importeParcial;
  let subtotal = 0;
  let importeN;
  let respuesta;
  let acumC = 0;
  let acumCal = 0;
  let acumA = 0;
  let acumBolsas = 0;
  let descuento;
  let maxPrecio;
  let maxBolsas;
  let tipoCaro;
  let flag = 1;

    do{
      tipo = prompt("Ingrese tipo cal/arena/cemento");
        while(tipo != "cal" && tipo != "cemento" && tipo != "arena"){
          tipo = prompt("Error. Ingrese tipo cal/arena/cemento");
        }

      cantidad = parseInt(prompt("Ingrese cantidad de bolsas: "));
      while (isNaN(cantidad) || cantidad <= 0){
        cantidad = parseInt(prompt("Error. Ingrese cantidad de bolsas: "));
      }

      precio = parseInt(prompt("Ingrese precio: "));
      while (isNaN(precio) || precio <= 0){
        precio = parseInt(prompt("Error. Ingrese precio: "));
      }

      importeParcial = precio * cantidad;
      // el subtotal es un acumulador de los importes parciales
      subtotal += importeParcial

      //acumulo el total de bolsas
        acumBolsas += cantidad
      //podria sumar los acumuladores de cada tipo
      //acumulo las cantidades 
      switch(tipo){
        case "arena":
          acumA += cantidad;
          break;
        case "cal":
          acumCal += cantidad;
          break;
        case "cemento":
          acumC += cantidad;
          break;
      }
        // la parte del maximo
      if (flag || precio > maxPrecio){
        maxPrecio = precio;
        tipoCaro = tipo;
        flag = 0;
      } 


      respuesta=prompt("quiere comprar algo mas?");
      } while(respuesta == "si");

      //calculo los descuentos fuera del bucle
    if(acumBolsas < 10){
      descuento = 0;
    }else if (acumBolsas<30){
      descuento = 0.15;
    }else{
      descuento = 0.25;
    }

    //sacar el mayor
    if(acumA > acumC && acumA > acumCal){
      maxBolsas = "Arena";
    }else if(acumC >= acumA && acumC > acumCal){
      maxBolsas = "Cemento";
    }else{
      maxBolsas = "Cal";
    }


    console.log("A- Importe bruto a pagar $ " + subtotal);
    if (descuento != 0){
      importeN = subtotal - subtotal * descuento;
    console.log("B- Importe neto a pagar $ "+ importeN);
    }

    console.log("D-El tipo con mas cantidad de bolsas es: "+ maxBolsas);

    console.log("F- El tipo mas caro es "+ tipoCaro+ "con un valor de $" + maxPrecio);

} 
