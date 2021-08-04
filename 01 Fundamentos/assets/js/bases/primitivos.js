//Declarando variable tipo string
let nombre = "Peter parker";
console.log(nombre);

nombre = "Ben parker";
console.log(nombre);

//mMostrando el tipo de dato
console.log(typeof nombre); 


//Mutando el tipo de dato de string a number asignando numeros
// a la variable que anteriormente era de tipo string.
// Javascript tiende a asignar tipos de datos de manera automatica
// dependiendo el tipo de dato que se le esté asignando
// para querer tener tipos fijos se recomienda el uso de TypeScript
nombre= 123
console.log(typeof nombre); 

//Declarando variable tipo boolean
let esMarvel=true;
console.log(typeof esMarvel);

//Declarando variable tipo number
let edad = 33;
console.log(typeof edad);

edad=33.01;
console.log(typeof edad);

//Usando camelCase que es definir el nombre de la variable que 
// estén conformadas por distintas palabras
let superPoder;
console.log(typeof superPoder);

//Declarando variable null
let soyNull = null;
console.log(typeof soyNull);

//Deckarando variable Symbol

let symbol1 = Symbol("a");
console.log(typeof symbol1);
let symbol2 = Symbol("a");
console.log(typeof symbol2);

//Mostrando que todas las variables symbol a pesar de tener el mismo contenido o valor
// siempre las variables de tipo symbol son únicas. 
console.log(symbol1===symbol2);