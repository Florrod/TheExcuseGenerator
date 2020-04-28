var who = ['The dog','My granma','His turtle','My bird'];
var action = ['eat','pissed','crushed','broked'];
var what = ['homework','keys','fruit','food'];
var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

window.onload = () => {
    document.getElementById('excuse').innerHTML = getExcuse();
}

function getExcuse() {
    let listExcuses = [who, action, what, when];
    let excuse = '';

    for (const partExcuse of listExcuses) {
        let position = getRandomNumber(partExcuse);
        excuse = excuse.concat(partExcuse[position],' ');
    }
    
    return excuse;    
}

function getRandomNumber(partExcuse) {
    return Math.floor(Math.random() * partExcuse.length); 
}