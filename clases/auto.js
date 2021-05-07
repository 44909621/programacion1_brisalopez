class Auto{

    //declaro los atributos de la clase
    precio='$1.000.000.00';
    motor;


    constructor(mar,mod)
    {
        this.marca=mar;
        this.modelo =mod;
    }

    arranque(){
        console.log(`
            Marca: ${this.marca}
            Modelo:${this.modelo}
            Precio:${this.precio}
            Motor:${this.motor}
        `);
    }
}
/*
creo la instancia de la clase pero 
tambie se ejecuta el contructor
*/
const auto= new Auto('Fiat','Algo');
auto.motor='1.4 TSI';
//aca con las instancias ejecuto el metodo
auto.arranque();


/*
esxportando esta clase, esta visible para los demas archivos
*/
//moble.exports= Auto;
