const array = [
    {
      Szerző_neve: "Balassi Bálint",
      Korszak: "reformáció",
      Szerelmek1: "Losonczy Anna",
      Szerelmek2: "Dobó Krisztina"
    },
    {
      Szerző_neve: "Csokonai Vitéz Mihály",
      Korszak: "felvilágosodás",
      Szerelmek1: "Vajda Juliána"
    },
    {
      Szerző_neve: "Petőfi Sándor",
      Korszak: "magyar romantika",
      Szerelmek1: "Mednyánszky Berta",
      Szerelmek2: "Szendrey Júlia"
    },
    {
      Szerző_neve: "Ady Endre",
      Korszak: "20. század",
      Szerelmek1: "Léda",
      Szerelmek2: "Csinszka"
    }
];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const tbody = document.createElement('tbody');
  

const szerzo_nev = document.createElement('th');
szerzo_nev.innerHTML = 'Szerző neve';

const korszak = document.createElement('th');
korszak.innerHTML = 'Korszak';

const szerelem1 = document.createElement('th');
szerelem1.innerHTML = 'Szerelem';

szerelem1.colSpan = 2;

  
  

document.body.appendChild(table);
table.appendChild(thead);
thead.appendChild(tr);
table.appendChild(tbody);

tr.appendChild(szerzo_nev);
tr.appendChild(korszak);
tr.appendChild(szerelem1);

const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    const nev = document.createElement('kolto_nev');
    e.preventDefault();
    const korszak = document.createElement('korszak');
    const szerelem1 = document.createElement('szerelem1');
    const szerelem2 = document.createElement('szerelem2');
    const masod = document.createElement('masodik');


    const nevvalue = nev.value;
    const korszakvalue = korszak.value;
    const szerelem1value = szerelem1.value;
    const szerelem2value = szerelem2.value;
    const masodvalue = masod.ariaChecked;

    const adatok ={
        nev:nevvalue,
        korszak:korszakvalue,
        szerelem1:szerelem1value,
        szerelem2:szerelem2value,

    }

    array.push(adatok)
})