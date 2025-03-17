
const colorList = ['121212','3ECF8E','006239','2F2F2F','29903B','FAFAFA','363636','5E5E5E']
const grid = document.querySelector('.container-grid') 
const h1 = document.querySelector('h1')
const button = document.querySelector('button')

//inicializacion del estdado
let darkMode = true //estado 

// return html function 
const containerColor = (colorHex) => {
    return (
        `<div class="container-color" style="background-color: #${colorHex}">
                <small class="container-small"  style="color: #3ECF8E;">#${colorHex ? colorHex : 'next' } </small>
        </div>`
    )
}

for (let i = 0; i < 100; i++) {
 grid.innerHTML += containerColor(colorList[i])
}

button.addEventListener('click', (e) => {
    if (darkMode) {

        document.body.style.backgroundColor = '#121212'
        h1.style.color = '#FAFAFA'
  

        darkMode = false
    }else {
        document.body.style.backgroundColor = 'white'
        h1.style.color = 'black'
        darkMode = true
    }
    
})