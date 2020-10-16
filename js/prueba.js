class Coche{
    #marca = 'Ferrari';//las puedo declarar como privadas mediante #
    #color;
    motor;

    constructor(marca, color, motor){
        this.#marca = marca;
        this.#color = color;
        this.motor = motor;
    }
}

const miCoche = new Coche('Ferrari', 'Rojo', '16V');
console.log(miCoche);//las propiedades privadas no se van a ver