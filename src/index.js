const img = document.getElementById('img')
const imgs = document.querySelectorAll('#img img')
const WidthImg = imgs[0].clientHeight
var indx = 0

function carrossel(){
    indx++
    if(indx > imgs.length -1){
        indx = 0
    }
    img.style.transform = `translateY(${-indx * WidthImg}px)`; 
    console.log(WidthImg)
}

setInterval(carrossel, 1800)