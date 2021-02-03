/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {

    let tempF;
    let tempC;

    tempF = parseInt(document.getElementById("txtIdTemperatura").value);
    tempC = (tempF - 32) / 1.8
    tempC = tempC.toFixed(4)

    alert(`${tempF} grados Fahrenheit equivalen a ${tempC} grados Centígrados`);


}

function CentigradosFahrenheit() {
    let tempC;
    let tempF;

    tempC = parseInt(document.getElementById("txtIdTemperatura").value);
    tempF = tempC * 1.8 + 32
    tempF = tempF.toFixed(4)

    alert(`${tempC} grados Centígrados equivalen a ${tempF} grados Fahrenheit`);


}
