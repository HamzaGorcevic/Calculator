grid = Array.from(document.querySelectorAll('.grid'))
vrednost = document.querySelectorAll('.vrednost')



grid.map(el =>{
    el.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            
            case 'AC':
                vrednost[0].innerText = ''
                break;

            case 'delete':
                if(vrednost[0].innerText){
                    vrednost[0].innerText = vrednost[0].innerText.slice(0,-1)
                    break;
                }
                
            case '=':
                try{
                vrednost[0].innerText = eval(vrednost[0].innerText)
                } catch{
                    vrednost[0].innerText = 'Error!'
                    break;
                }
                break;

                    
    

                
            default:
  

                vrednost[0].innerText += e.target.innerText;
        }



    })
})