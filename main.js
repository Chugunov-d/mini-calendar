let date = new Date();
let dayNum = date.getDay();
dayNum = (dayNum === 0)? 7 : 0;
let active = document.querySelector(".week li:nth-child("+dayNum+")");
active.classList.add('current');

let day = date.getDate();
let h1 = document.createElement('h1');
h1.innerHTML = day;
active.appendChild(h1)

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let month = months[date.getMonth()]

let h5 = document.createElement('h5');
h5.innerHTML = month;
active.appendChild(h5)

let year = date.getFullYear()
let h3 = document.createElement('h3');
h3.innerHTML = year;
active.appendChild(h3)