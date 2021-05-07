const calcular= () =>{
    const select = document.querySelector("#slt_operar").value;
    const input1= document.querySelector("#input1").value;
    const input2=document.querySelector("#input2").value;
    const parrafo=document.querySelector("#p_calcular");

    if(select==0)
    {
        input1.textContent='V(tensión)';
        input2.textContent='R(resistencia)';
        const intencidad= input1/input2
        parrafo.textContent=`
        El resultado de I=${intencidad}
        `
    }
    if (select==1)
    {
        input1.textContent='I(intencidad)';
        input2.textContent='R(resistencia)';
        const tension= input1*input2
        parrafo.textContent=`
        El resultado de V=${tension}
        `
    }
    if (select==2)
    {
        input1.textContent='V(tensión)';
        input2.textContent='I(intencidad)';
        const resistencia= input1/input2
        parrafo.textContent=`
        El resultado de R=${resistencia}
        `
    }

}


const btn = document.querySelector("#btn_probar");

btn.addEventListener("click",calcular);