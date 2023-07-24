//Operadores de comnparacion



const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago","montevideo");

const valorPasaje = 1000;

if (valorPasaje === 1000);
console.log('el pasaje vale 1000');

//Palabra reservada If
//evalua una condicion



//operadores logicos
// y(and) - o (or) - no (not)
// and = && - se deben cumplir las 2 condicione
//or  = || - se debe cumplir una condicion
// not ! - no se cumpla la condicion

let edadPasajero = 17;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1 ) &&
(edadPasajero >= 18 || estaAcompanado))
    {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple los requisitos");
}

edadPasajero = 25;
estaAcompanado = true;

//aplicando logica negativa

if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1 ) &&
(edadPasajero >= 18 || estaAcompanado)))
    {
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple los requisitos");
}