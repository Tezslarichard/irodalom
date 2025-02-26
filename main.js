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
const fejlecem = [
    'Szerző neve',
    'Korszak',
    'Szerelmek'
]
const table = document.createElement('table')
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')
  
document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)



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

fejlec(thead,fejlecem)
rendertable(tbody,array)
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

