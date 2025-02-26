const array = [
    {
      Szerzo_neve: "Balassi Bálint",
      Korszak: "reformáció",
      Szerelmek1: "Losonczy Anna",
      Szerelmek2: "Dobó Krisztina"
    },
    {
      Szerzo_neve: "Csokonai Vitéz Mihály",
      Korszak: "felvilágosodás",
      Szerelmek1: "Vajda Juliána"
    },
    {
      Szerzo_neve: "Petőfi Sándor",
      Korszak: "magyar romantika",
      Szerelmek1: "Mednyánszky Berta",
      Szerelmek2: "Szendrey Júlia"
    },
    {
      Szerzo_neve: "Ady Endre",
      Korszak: "20. század",
      Szerelmek1: "Léda",
      Szerelmek2: "Csinszka"
    }
];

const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')
  
document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)


/**
 * 
 * @param {HTMLElement} thead 
 * 
 * ez a függvény egy táblázat fejlécét hozza létre for ciklussal 
 */
function fejlec(thead){
    
    const fejlecem = [
        'Szerző neve',
        'Korszak',
        'Szerelmek'
    ]

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
fejlec(thead)
rendertable(tbody,array)

const formtable1 = [
    {
        label: 'Költő neve',
        inputId :'kolto_nev',
        type: 'text'
    },
    {
        label: 'Korszak',
        inputId :'korszak',
        type: 'text'
    },
    {
        label: 'Szerelme: ',
        inputId :'szerelem1',
        type: 'text'
    },
    {
        label: 'Volt másik szerelme?',
        inputId :'masodik',
        type: 'text'
    }
]
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

createform(formtable1)

const form = document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const kolto_nev = document.getElementById('kolto_nev')
    const korszak = document.getElementById('korszak')
    const szerelmek1 = document.getElementById('szerelem1')
    const szerelmek2 = document.getElementById('masodik')
    
    const forma = e.currentTarget
    const hiba = forma.querySelectorAll('.error')
    for(const errorhiba of hiba){
        errorhiba.innerHTML = ""
    }

    let valid = true

    if(!validatefields(kolto_nev, 'Költő neve nem lehet üres')){
        valid = false
    }

    if(!validatefields(korszak, 'Korszak nem lehet üres')){
        valid = false
    }
    if(!validatefields(szerelmek1, 'Szerelmek1 nem lehet üres')){
        valid = false
    }


    if(valid){
        
    const kolto_nevValue = kolto_nev.value
    const korszakValue = korszak.value
    const szerelmek1Value = szerelmek1.value
    const szerelmek2Value = szerelmek2.value

    const new_array = {
        Szerzo_neve: kolto_nevValue,
        Korszak: korszakValue,
        Szerelmek1: szerelmek1Value,
        Szerelmek2: szerelmek2Value
    }
    array.push(new_array)
    tbody.innerHTML = ''
    rendertable(tbody,array)
    form.reset()
}
})

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

