'use strict'

//guiñar el ojo al hacer click.
//al dejar de hacer :hover tiene que volver a la posición inicial.

const head = document.querySelector('.js__head')
const wink = document.querySelector('.js__wink')


function handleClick(){
    wink.innerHTML = ';)';

}

function clickOff(){
    head.classList.add('hover');
    console.log('click');
}



head.addEventListener('click' , handleClick);
head.addEventListener('onmouseout' , clickOff);