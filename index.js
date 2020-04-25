var who = ['the dog','my granma','his turtle','my bird'];
var action = ['eat','pissed','crushed','broked'];
var what = ['homework','keys','fruit','food'];
var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function getExcuse() {
    let position = getRandomNumber();
    let excuse = ''.concat(who[position],' ',action[position],' ',what[position],' ',when[position]);
    return excuse;    
}
console.log(getExcuse());

function getRandomNumber() {
    return Math.floor(Math.random() * 4); 
}