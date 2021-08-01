//Conociendo la función lenght de loas arreglos para conocer la cantidad
// de elementos que contiene
let juegos= ["Mario", "zelda", "metroid", "smash"];
console.log(juegos.length);
let ultimo = juegos.length-1;
console.log(ultimo);


//conociendo fucnión for each para realizar una acción por cada elemento del arreglo
juegos.forEach((elemento,indice,arr)=>{
    console.log(elemento, indice, arr)
});

//Conociendo la función push que nospermite añadir un nuevo elemento al arreglo y además 
// conocer que también nos devuleve el nuevo valor de la longitud del arreglo despés de hacer
// la adición del nuevo elemento
let nuevaLongitud=juegos.push("F-zero");
console.log(nuevaLongitud);

//conociendo la función unshift que nos permite añadir un nuevo elemento al incicio de nustro arreglo
nuevaLongitud= juegos.unshift("Final Fantasy");
console.log(nuevaLongitud, juegos);

//conociendo la función pop  que nos permite remover el último elemento de nuestro arreglo y lo regresa
// para poder almacenarlo
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);