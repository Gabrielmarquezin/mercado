const img = document.getElementById('img')
const imgs = document.querySelectorAll('#img img')
var indx = imgs.length -1

const menu = document.getElementsByClassName('menu-h')
const incone = document.getElementById('icone')

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

incone.addEventListener('click', ()=>{
    menu[0].classList.toggle('move')
})