    /*
    Realizar el algoritmo que permita iterar el ingreso de dos datos, 
    una letra y 
    un número entre -100 y 100 (validar) 
    hasta que el usuario quiera e 

informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/

function mostrar()
{   
    let letra;
    let numero;
    let respuesta;     
    let numeroMaximo;
    let numeroMinimo;
    let letraMaximo;
    let letraMinimo;
    let contadorPares = 0;
    let contadorImpares = 0;
    let contadorCeros = 0;
    let contadorPositivos = 0;
    let acumPositivos = 0;
    let acumNegativos = 0;
    let flagNumero = 1;


    do{
        
        letra = prompt("Ingrese una letra:");
            while(isNaN(letra)== 0){
                letra = prompt("Error. Ingrese una letra:");
            }

        numero = parseInt(prompt("Ingrese un numero: ")); 
            while(isNaN(numero) || numero<-100 || numero>100){
                numero = parseInt(prompt("Error. Ingrese un numero: ")); 
            }
            

        if(numero % 2 == 0){
            contadorPares++;
        }else{
            contadorImpares++;
        }
       
        if(numero == 0){
            contadorCeros++;
        }else if(numero>0){
            contadorPositivos++;
            acumPositivos+=numero;
        }else{
            acumNegativos+= numero;
        }

        if(flagNumero || numero > numeroMaximo){
            numeroMaximo = numero;
            letraMaximo = letra;
        }
        
        if(flagNumero || numero < numeroMinimo){
            numeroMinimo = numero;
            letraMinimo = letra;
            flagNumero = 0;
        }
        
        respuesta = prompt("Quiere ingresar otros datos? s/n");
    }while(respuesta == 's');


    if(contadorPositivos != 0){
        promedioPositivos = acumPositivos/contadorPositivos
    }

    
    console.log(`A-Cantidad de numeros pares: ${contadorPares}`);
    console.log(`B-Cantidad de numeros impares: ${contadorImpares}`);
    console.log(`C-Cantidad de ceros: ${contadorCeros}`);
 
    console.log(`D-El promedio de todos los números positivos ingresados ${promedioPositivos}`);
    
    console.log(`La suma de todos los números negativos: ${acumNegativos}`);

    console.log(`El número del máximo: ${numeroMaximo}
    Letra del máximo:  ${letraMaximo}
    El número del mínimo: ${numeroMinimo}
    Letra del mínimo:${letraMinimo} `);






}
