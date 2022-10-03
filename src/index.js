const img = document.getElementById('img')
const imgs = document.querySelectorAll('#img img')
var indx = imgs.length -1

function carrossel(){
    imgs[indx].classList.add('invisible')
    indx--   
    if(indx < 0){
        indx = imgs.length - 1
        imgs.forEach(element => {
            element.classList.remove('invisible')
        })
    }

}

setInterval(carrossel, 4000)