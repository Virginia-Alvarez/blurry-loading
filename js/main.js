'use strict'

const loadNumber = document.querySelector('.loadingNumber');
const image = document.querySelector('.background');

//loading progress

let load = 0;
let interval = setInterval(blurring, 30);

function blurring(){
    load++;

    if(load >99){
        clearInterval(interval);
    }

    loadNumber.innerHTML = `${load}%`;
//opacity and blur of progress bar and background
    loadNumber.style.opacity = scale(load, 0, 100, 2, 0);
    image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}



// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}