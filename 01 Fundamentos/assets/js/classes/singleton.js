
class Singleton{

    static instancia;
    name = "";

    constructor(name = ""){

        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        this.name = name;
        Singleton.instancia = this;
    }
}

const instancia1 = new Singleton("Spiderman");
const instancia2 = new Singleton("Ironman");
const instancia3 = new Singleton("Black Panther");

console.log(instancia1.name);
console.log(instancia2.name);
console.log(instancia3.name);
