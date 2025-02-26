/**
 * 
 * @param {HTMLElement} thead 
 * 
 * ez a függvény egy táblázat fejlécét hozza létre for ciklussal 
 */
function fejlec(thead,fejlecem){
const th_sor = document.createElement('tr')
thead.appendChild(th_sor)

for(const fej of fejlecem){
    const th = document.createElement('th')
    th.innerHTML = fej
    th_sor.appendChild(th)

    if(fej === 'Szerelmek'){
        th.colSpan = 2
    }
}}
/**
 * 
 * @param {HTMLElement} tbody 
 * @param {Array} array
 * ez a függvény egy táblázatot hoz létre for ciklussal
 * minden elemnek van egy cellája a táblázatban
 * egy tömbböl olvassa ki az adatokat
 */
function rendertable(tbody,array){
    for(const futo of array){
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)
    
        const td1 = document.createElement('td')
        td1.innerHTML = futo.Szerzo_neve
        tr2.appendChild(td1)
    
        const td2 = document.createElement('td')
        td2.innerHTML = futo.Korszak
        tr2.appendChild(td2)
        
        const td3 = document.createElement('td')
        td3.innerHTML = futo.Szerelmek1
        
        if (!futo.Szerelmek2) {
            td3.colSpan = 2
        }
        tr2.appendChild(td3)
    
        if (futo.Szerelmek2) {
            const td4 = document.createElement('td')
            td4.innerHTML = futo.Szerelmek2
            tr2.appendChild(td4)
        }
    }
}

    /**
 * 
 * @param {Array} formtable1 
 * ez a függvény egy formot hoz létre for ciklussal
 * minden elemnek van egy labelje és egy input mezője
 * ez a függvény helyettesiti a html formot
 */
function createform(formtable1){
    const form1 = document.createElement('form')
    form1.id = 'form'
    document.body.appendChild(form1)

    for(const formelem of formtable1){
        const div = document.createElement('div')
        form1.appendChild(div)

        const label = document.createElement('label')
        label.innerHTML = formelem.label
        div.appendChild(label)

        const input = document.createElement('input')
        input.id = formelem.inputId
        input.type = formelem.type
        div.appendChild(input)

        const error = document.createElement('div')
        error.className = 'error'
        div.appendChild(error)
    }
    const button = document.createElement('button')
    button.innerHTML = 'Küldés'
    form1.appendChild(button)
}


/**
 * 
 * @param {HTMLElement} htmlelement 
 * @param {string} erroruzi 
 * @returns {boolean}
 * ez a függvény validálja a mezőket
 */
function validatefields(htmlelement, erroruzi){
    let valid = true
    if(htmlelement.value === ''){
       const parentElement = htmlelement.parentElement
       let error = parentElement.querySelector('.error')
       if(error != undefined){
            error.innerHTML = erroruzi
       }
       valid = false
    }
    return valid 
}


