// faça uma função que retorne uma temperatura em celsius convertido para fahrenheit
function fahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

var celsius = 40;
var ResFahrenheit = fahrenheit(celsius);

alert(`Celsius: ${celsius} \nFarrenheit: ${ResFahrenheit}`);
