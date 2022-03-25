container = document.querySelector('.container')
on = document.querySelector('.on')
teks1 = document.querySelector('#tekst1')
tekst = document.querySelector('#tekst')
    on.addEventListener('click',()=>{
        teks1.innerText = ''

        if(tekst.innerText == 'On'){
            container.style.background = 'rgb(43, 48, 43)'
            on.style.background = 'rgb(75, 78, 75)'
            tekst.innerText = 'Off'
            on.style.animationDuration = '2s'
            on.style.animationFillMode = 'forwards'
            on.style.animationName = 'animacija'
            tekst.style.left = '17%'
            tekst.style.animationName = 'animacijaT'
            tekst.style.animationDuration = '1s'
            tekst.style.animationDelay = '1s'
            tekst.style.animationFillMode = 'forwards'

        }else{
            container.style.background = 'black'
            on.style.animationDuration = '2s'
            on.style.animationFillMode = 'forwards'
            on.style.animationName = 'animacijaOff'
            on.style.marginLeft = '0%'
            on.style.background = 'blue'
            tekst.style.left = '58%'
            tekst.style.animationName = 'animacijaF'
            tekst.style.animationDuration = '1s'
            tekst.style.animationDelay = '1s'
            tekst.style.animationFillMode = 'forwards'
            tekst.innerText = 'On'

        
        }

    })

