import Auto from'./auto';

//creamos la instacia de la las auto
const auto= new Auto();

//auto.arranque();

const btn_arranque = document.querySelector('#btn_arranque');

btn_arranque.addEventListener("Click", auto.arranque)