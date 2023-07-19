const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//defininicion de una lista con tipo alfanumerico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(ciudadesDisponibles);

//Definicion de una lista de forma abreviada

const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brazil", "Argentina"];
console.log(paisesDisponibles);

    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Montevideo');

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);

    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');

    // console.log(ciudadesDisponibles);
    // console.log(paisesDisponibles);


    // mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[1]);

paisesDisponibles.splice(1,2,'Canada','Mexico');
console.log(paisesDisponibles);



