var firstName = "ELIZABETH"
var secondName = "MUBARAK"
var fullName =firstName+" " + secondName
console.log(fullName);

//character access
var myName = 'Elizabeth Mubarak'
var charL = myName.charAt(1)
console.log(charL);

var myName = 'Elizabeth Mubarak'
var charL = myName.charAt(10)
console.log(charL);

var myName = 'Elizabeth Mubarak'
var charL = myName.length
console.log(charL);

var myName = 'Elizabeth Mubarak'
var lastIndex = myName.length - 1
console.log(lastIndex);

var myName = 'Elizabeth Mubarak'
var charL = myName.charAt(16)
console.log(charL);


var myName = 'Elizabeth Mubarak'
var lastIndex = myName.length - 1
console.log(myName.charAt(lastIndex));

var myName = 'Elizabeth Mubarak'
var indexOfU = myName.indexOf("u")
console.log(indexOfU);

let name = "Elizabeth Mubarak Aljabana"
console.log(name.substr(2, 4));
console.log(name.substring(2, 4));

var myName =' elizabeth'

console.log(myName.toUpperCase());

var myName = 'ELIZABETH'
console.log(myName.toLowerCase())

var myName = 'ELIZABETH'
console.log(myName.toLocaleLowerCase())

var myName = 'elizabeth'
console.log(myName.toUpperCase())
console.log(myName.split(""))

// split ()
let message = "30 weeks of code"
console.log(message.split())
let message1 = "30 weeks of code"
console.log(message1.split(''))
let message2 = "30 weeks of code"
console.log(message2.split(' '))

let myName1 = 'elizabeth, mubarak, Aljabana .'
console.log(myName1.split(''))
let myName2 = 'elizabeth, mubarak, Aljabana .'
console.log(myName2.split(' '))

let myName3 = 'elizabeth . mubarak . Aljabana .'
console.log(myName3.split(' .'))

let myName4 = 'elizabeth, mubarak, Aljabana .'
console.log(myName4.split(' ,'))

// trim
let msg = 'we love programming'
console.log(msg);
let msg1 = '              we love programming'
console.log(msg1);
let msg2 = 'we love programming'
console.log(msg2.trim());

// concat
let firstName1 = 'Nenia'
let secondName1 = 'aljabana'
let fullName1 = firstName1.concat(" ",secondName1)
console.log(fullName1);

let firstName0 = 'Nenia'
let secondName0 = 'aljabana'
let fullName0 = firstName0.concat(secondName0)
console.log(fullName0);

let firstName2 = 'Nenia '
let secondName2 = 'aljabana'
let fullName2 = firstName2.concat(secondName2)
console.log(fullName2);

// includes
let myMsg =' Hello world, I am Liz';
console.log(myMsg.includes('Liz'));
let myMsg2 =' Hello world, I am Liz';
console.log(myMsg2.includes('liz'));

//replace
let myMsg3 =' Hello world, I am Liz';
console.log(myMsg3.replace('Liz','Rose'));

let myNm = 'elizabeth mubarak'
console.log(myNm.startsWith('eli'))
let myNm0 = 'elizabeth mubarak'
console.log(myNm0.endsWith('k'))
let myNm1 = 'elizabeth mubarak'
console.log(myNm1.startsWith('iza'))
let myNm2 = 'elizabeth mubarak'
console.log(myNm2.endsWith('mub'))

