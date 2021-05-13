const calcular1 = () =>{

    let miarreglo=[44,88,11,2,7];

    console.log( miarreglo[1] );
}

const boton1 = document.querySelector("#btn_probar");

boton1.addEventListener("click",calcular1);

const recorrer_arreglos = () => {

    let miarreglo2=['pragramacion1','web2','robotica'];

    for(indice in miarreglo2)
    {
        console.log(miarreglo2[indice]);
    }
}

const boton2=document.querySelector('#btn_recorrer');

boton2.addEventListener("click", recorrer_arreglos);

const mostrar_objetos = () =>{
    let miobjeto = {
        nombre:'pepe',
        correo:{
            correo1:'pepito@gmail.com',
            correo2:'pepito@outlook.com'
        },
        redes_sociales:{
            fecebook:'www.facebook.com/pepe',
            twitter:'www.twitter.com/pepe'
        }

    }
    console.log(`
        mi nombre es:${miobjeto.nombre}
        mi facebook es:${miobjeto.redes_sociales.twitter}
    `)
}


const boton3=document.querySelector('#btn_objetos');

boton3.addEventListener("click",mostrar_objetos );


const recorrer_objetos = () =>{
    let OBJETOS = [
        {
            nombre:'pepe',
            apellido:'lopez'
        },
        {
            nombre:'juan',
            apellido:'Perez'
        }
    ];
    OBJETOS.forEach(objeto => {
        console.log(`
        nomre:${objeto.nombre}
        apellido:${objeto.apellido}
        `)
        
    });

}
const boton4=document.querySelector('#btn_recorrer_objetos');

boton4.addEventListener("click",recorrer_objetos);