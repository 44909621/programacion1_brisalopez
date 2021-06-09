const costo = () =>{
    const pregunta=window.prompt('¿Que ingrediente elije agregarle?')
 
    let helado =250;

    if (pregunta== 'oreo'){
        let total = helado + 40;
        document.write ('Total a pagar: '+total);
    }
    else{
        if (pregunta=='kitkat'){
        let total1 =helado+55;
        document.write ('Toltal a pagar: '+total1);
        }
        else{
            
            if (pregunta=='briwnie'){
                let total2 = helado + 65;
                document.write('Total a pagar: '+total2);
            }
            else{
                if  (pregunta =='rocklets'){
                    let total3 = helado + 75;
                    document.write('Total a pagar: '+total3);
                }
                else{
                    document.write('no tenemos este topping, lo sentimos');
                }
            }
        }
    
        
    }

}

const boton = document.querySelector("#btn_boton");

boton.addEventListener("click", costo);