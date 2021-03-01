/*Bienvenidos.
Realizar el algoritmo que permita ingresar el 
nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperatura mínima que se registra en su territorio(entre -50 y 50) 
hasta que el usuario quiera e 
informar al terminar el ingreso por document.write:

a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
    let pais;
    let habitantes;
    let temperatura;
    let respuesta;
    let habitantesMin;
    let paisMenosHabitantes;
    let promedioHabitantes;
    let tempMin;
    let paisTempMin;

    let temperaturaPares = 0;
    let flagHabitantes = 1;
    let contadorPaisTemp = 0;
    let contadorPaises = 0;
    let acumHabitantes = 0;
    let flagTemperatura = 1;
    

    do{

        pais = prompt("Ingrese el nombre del País: ");
            while(isNaN(pais)== 0){
                pais = prompt("Error. Ingrese el nombre del País: ");
            }
        habitantes = parseInt(prompt("Ingrese la cantidad de habitantes (millones)"));
            while(isNaN(habitantes) || habitantes<1 || habitantes>7000){
                habitantes = parseInt(prompt("Error. Ingrese la cantidad de habitantes (entre 1 y 7000 millones):"));
            }
        temperatura = parseInt(prompt("Ingrese la temperaruta mínima que se registra en su territorio -50/50:"));
            while(isNaN(temperatura) || temperatura < -50   || temperatura > 50){
                temperatura = parseInt(prompt("Error. Ingrese la temperaruta mínima que se registra en su territorio -50/50:"));
            }

        if(temperatura % 2 == 0){
            temperaturaPares++;
        }

        acumHabitantes += habitantes;
    
        if(pais){
        contadorPaises++;
        }

        if(flagHabitantes || habitantes < habitantesMin){
            habitantesMin = habitantes;
            paisMenosHabitantes = pais;
            flagHabitantes = 0;
        }
       
       if(flagTemperatura || temperatura < tempMin){
           tempMin = temperatura;
           paisTempMin = pais;
           flagTemperatura = 0;
        }

        if(temperatura > 40){
            contadorPaisTemp++;
        }



        respuesta = prompt("Quiere ingresar otro País?");
    }while(respuesta == 's')


    promedioHabitantes = acumHabitantes / contadorPaises





console.log(pais);
console.log(habitantes);
console.log(temperatura);


console.log(`A- La cantidad de temperaturas pares:${temperaturaPares}`)
console.log(`B- El nombre del pais con menos habitantes: ${paisMenosHabitantes}`)
console.log(`C- Cantidad de paises que superan los 40 grados: ${contadorPaisTemp}`)
console.log(`D- Promedio de habitantes entre los paises ingresados: ${promedioHabitantes}`)
console.log(
`F- La temperatura mínima ingresada: ${tempMin}
Nombre del pais que registro esa temperatura: ${paisTempMin}`)


}
