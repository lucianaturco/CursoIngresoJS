/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y 
el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */

function mostrar(){

    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let acumuladorBarbijo = 0;
    let acumuladorAlcohol = 0;
    let acumuladorJabon = 0;
    let contadorBarbijo = 0;
    let contadorAlcohol = 0;
    let contadorJabon = 0;
    let precioAlcoholBarato;
    let cantidadAlcoholBarato;
    let fabricanteAlcoholBarato;
    let promedioCompra;
    let mayorTipo;
    let flagAlcohol = 0;
    let mensajeAlcohol = "No se compraron alcoholes";
    let mensajeB;
    let mensajeJabon;

    for (i=0; i<1 ; i++){

        tipo = prompt(`Ingrese tipo: "barbijo" , "jabon" o "alcohol"`);
        while(tipo != "barbijo" && tipo!= "jabon" && tipo != "alcohol"){
            tipo = prompt(`Tipo invalido. Ingrese tipo: barbijo" , "jabon" o "alcohol"`);

        }
        console.log(tipo);

        precio = parseFloat(prompt("Ingrese el precio $(100-300):"));
        while(precio<100 || precio>300 || isNaN(precio)){
            precio = parseFloat(prompt("Error. Ingrese el precio entre $100 y $300"));
        }
        console.log(precio);

        cantidad = parseInt(prompt("Ingrese la cantidad deseada (hasta 1000 unidades):"));
        while(cantidad<1 || cantidad>1000){
            cantidad = parseInt(prompt("Error.Ingrese la cantidad deseada (hasta 1000 unidades)"));
        }
        console.log(cantidad);

        marca = prompt("Ingrese marca: ");
        fabricante = prompt("Ingrese fabricante");
        
        switch(tipo){
            case "alcohol":
                acumuladorAlcohol+= cantidad;
                contadorAlcohol ++;

                if(flagAlcohol == 0 || precioAlcoholBarato > precio){
                precioAlcoholBarato = precio;
                cantidadAlcoholBarato = cantidad;
                fabricanteAlcoholBarato = fabricante;
                flagAlcohol = 1;
                }

                break;
            case "barbijo":
                acumuladorBarbijo += cantidad
                contadorBarbijo ++;
                break;
            case "jabon":
                acumuladorJabon += cantidad
                console.log(`Unidades de jabon total: ${acumuladorJabon}`);
                contadorJabon++;
                break;
        }


    }

        if(acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon){
            //cuando acumAlcohol sea mayor
            mayorTipo = "Alcohol";
            promedioCompra = acumuladorAlcohol/contadorAlcohol;

        }else if(acumuladorBarbijo>acumuladorJabon && acumuladorBarbijo>=acumuladorAlcohol){
            //cuando acumBarbijo sea mayor
            mayorTipo = "Barbijo";
            promedioCompra = acumuladorBarbijo/contadorBarbijo;
        }else{
            //cuando el acumJabon sea mayor
            mayorTipo = "Jabon";
            promedioCompra = acumuladorJabon/contadorJabon;
        }
         if(flagAlcohol){
        mensajeAlcohol = "A-Fabricante alcohol barato: "+ fabricanteAlcoholBarato +
        "\n Cantidad: "+ cantidadAlcoholBarato +
        "\n Pecio: "+ precioAlcoholBarato;
        }
        
        mensajeB = "B-Tipo con mas unidades: "+ mayorTipo + " Promedio: "+ promedioCompra;
        mensajeJabon ="C-Unidades de jabón "+ acumuladorJabon;

        alert(mensajeAlcohol + "\n" + mensajeB + "\n"+ mensajeJabon);

}

