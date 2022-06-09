const button = document.querySelector('.myButton');
const names = document.querySelector('.name');

let myName = 'anouska schellevis';
console.log(myName.toUpperCase( ));

let hisName = 'jan jansen';
console.log(hisName.toLowerCase( ));


function myFunction () {
    names.innerHTML += myName;
}

button.addEventListener('click', myFunction);