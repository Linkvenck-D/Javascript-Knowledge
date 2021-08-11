
class Persona{

    static _conteo = 0;
    
    static get conteo(){
        return Persona._conteo + " instancias";
    }

    static mensaje(){
        console.log(this.nombre);
        console.log("Soy un método estático");
    }


    nombre = "";
    codigo = "";
    frase  = "";
    comida = "";
    constructor(nombre, codigo, frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase
        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return (`La comida favorita de ${this.nombre} es ${this.comida}`)
    }

    quienSoy(){
        console.log(`Mi nombre es: ${this.nombre}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const heroe1 = new Persona( "Peter Parker", "Spiderman", "Soy tu amigable vecino el hombre araña");
const heroe2 = new Persona( "Tony Stark", "IronMan", "Yo soy IronMan");

console.log(heroe1);
console.log(heroe2);

heroe1.quienSoy();
heroe2.quienSoy();

heroe1.miFrase();
heroe2.miFrase();

heroe1.setComidaFavorita = "EL pay de cereza de la tia may";
console.log(heroe1.getComidaFavorita);

console.log(Persona.conteo);
console.log(Persona.mensaje());