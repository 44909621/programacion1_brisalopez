const mostrar =() =>{

    const respuesta= window.prompt("Estas seguro de realizar esta accion?");

    if (respuesta == 'si')
    {
        document.write('Irás a la carcel');
    }
    else
    {
        if (respuesta == 'no')
        {
            document.write('Iras a casa');
        }
        else 
        {
            document.write ('La documentación por favor');
        }
    }
}

const boton = document.querySelector("#btn_mostrar");

boton.addEventListener("click", mostrar);