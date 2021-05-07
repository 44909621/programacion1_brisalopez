const Problema=() =>{
    const a =document.querySelector("#a").value;
    const b=document.querySelector("#b").value;
    const c=document.querySelector("#c").value;

    const calculo=document.querySelector("#p_calcular");

    const bloque1=(Math.pow(b,2))-(4*c);
    const bloque2=2*a;
    const raiz=Math.sqrt(bloque1);
    const bloque3= raiz/bloque2;

    const resultado1=-b+bloque3;
    const resultado2=-b-bloque3;

    calculo.textContent=`
    La raiz uno es=${resultado1}
    La raiz dos es=${resultado2}
    `
}


const btn = document.querySelector("#btn_probar");

btn.addEventListener("click",Problema);