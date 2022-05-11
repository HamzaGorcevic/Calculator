firstName = document.querySelector('#playerfirst')
secondName = document.querySelector('#playersecond')
start = document.querySelector('.btnStart')
notMain = document.querySelector('.notMain')
container = document.querySelector('.container')
dugme = Array.from(document.querySelectorAll('.dugme'))
console.log(dugme);
naslov = document.querySelector('.naslov')
pobedaX = document.querySelector('.pobedaX')
pobedaO = document.querySelector('.pobedaO')

firstName = document.querySelector('#playerfirst')
secondName = document.querySelector('#playersecond')
start = document.querySelector('.btnStart')


start.addEventListener('click',()=>{

    listaX = 0

function bojeBorder(){
    secondName.placeholder = 'second player X'
    secondName.style.border = '0px red solid'
    firstName.placeholder = 'frist player X'
    firstName.style.border = '0px red solid'
    firstName.style.animation = 'none'
    secondName.style.animation = 'none'


}
if(firstName.value != '' && secondName.value != ''){


    notMain.style.display = 'none'



    dugme.forEach(el => el.addEventListener('click',function hamza(){
        naslov.innerText = `${firstName.value}  vs  ${secondName.value}`
        naslov.style.color = 'orange'
        
        
        nest = document.querySelector('.nest')
        nist = document.querySelector('.nist')
        el.innerText = 'X'
        el.innerHTML = '<div class="nest"></div><div class="nist">X</div>'
        listaX +=1
        if(listaX % 2 == 0){
            el.innerText = 'O'

            el.innerHTML = '<div class="nust">O</div>'
        }
        el.style.fontSize = '0px'
        if(el.innerText != ''){
            console.log('prazan',el.innerText);
            el.removeEventListener('click',hamza)
        }
        if(dugme[0].innerText === 'X' && dugme[1].innerText === 'X' && dugme[2].innerText === 'X' || dugme[0].innerText === 'X' && dugme[3].innerText === 'X' && dugme[6].innerText === 'X'
        ||  dugme[3].innerText === 'X' && dugme[4].innerText === 'X' && dugme[5].innerText === 'X' || dugme[6].innerText === 'X' && dugme[7].innerText === 'X' && dugme[8].innerText === 'X' || 
        dugme[8].innerText === 'X' && dugme[5].innerText === 'X' && dugme[2].innerText === 'X' || dugme[7].innerText === 'X' && dugme[4].innerText === 'X' && dugme[1].innerText === 'X' || dugme[0].innerText === 'X' && dugme[4].innerText === 'X' && dugme[8].innerText === 'X' || dugme[6].innerText === 'X' && dugme[4].innerText === 'X' && dugme[2].innerText === 'X'){
            pobedaX.innerText = firstName.value + '  Won'
            pobedaX.style.display = 'block'

        }else if(dugme[0].innerText === 'O' && dugme[1].innerText === 'O' && dugme[2].innerText === 'O' || dugme[0].innerText === 'O' && dugme[3].innerText === 'O' && dugme[6].innerText === 'O'
        ||  dugme[3].innerText === 'O' && dugme[4].innerText === 'O' && dugme[5].innerText === 'O' || dugme[6].innerText === 'O' && dugme[7].innerText === 'O' && dugme[8].innerText === 'O' || 
        dugme[8].innerText === 'O' && dugme[5].innerText === 'O' && dugme[2].innerText === 'O' || dugme[7].innerText === 'O' && dugme[4].innerText === 'O' && dugme[1].innerText === 'O' || dugme[0].innerText === 'O' && dugme[4].innerText === 'O' && dugme[8].innerText === 'O' || dugme[6].innerText === 'O' && dugme[4].innerText === 'O' && dugme[2].innerText === 'O'){
            pobedaO.innerText = secondName.value + '  Won'
            pobedaO.style.display = 'block'

        }else if(listaX > 8){
            pobedaO.style.display = 'block'
            pobedaO.innerText = 'Draw'
        }
        
    }))
}else if(firstName.value == '' && secondName.value != ''){
    firstName.classList.add('error')
    firstName.placeholder = 'field is empty'
    firstName.style.border = '4px red solid'
    firstName.style.animation = 'failed 0.3s'
    setTimeout(bojeBorder,2000)
    
}else if(firstName.value != '' && secondName.value == ''){
    secondName.classList.add('error')
    secondName.placeholder = 'field is empty'
    secondName.style.border = '4px red solid'
    secondName.style.animation = 'failed 0.3s'
    setTimeout(bojeBorder,2000)

}else if(firstName.value =='' && secondName.value == ''){
    secondName.placeholder = 'field is empty'
    secondName.style.border = '4px red solid'
    firstName.placeholder = 'field is empty'
    firstName.style.border = '4px red solid'
    firstName.style.animation = 'failed 0.3s'
    secondName.style.animation = 'failed 0.3s'
    
    
    setTimeout(bojeBorder,800)

}


})
