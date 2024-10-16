function changeTerm1() {
    document.getElementById('term1').innerHTML = 'The first term';
    document.getElementById('term1').style.color = 'blue';
}
function changeTerm2(){
    document.getElementById('term2').innerHTML = 'The second term';
    document.getElementById('term2').style.color = 'tomato';
}
function changeTerm3(){
    document.getElementById('term3').innerHTML ='The third term';
    document.getElementById('term3').style.color = 'green';
}
function getTime(){
    document.getElementById('time').innerHTML = Date();
    alert('we are displaying the time now...');
}

function greeting(a){
    a = "Amukelani";
    console.log('hello ', a)
}

let myArray = [1,2,3,4,5];
let valuePairs = {name:"Amukelani", Age:30};

// == checks if the value is the same
// === checks the type & value

let A = 10;

if (A == 4 ){
    console.log('A is: ', A)
}
else if (A === 4 ){
    console.log('A is: ', A)
}
else if (A < 4 ){
    console.log('4 is > ', A)
}
else if (A > 4 ){
    console.log('4 is < ', A)
}
else if (A != 4 ){
    console.log('4 is not equal to ', A)
}

function allowDrop (ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.targetid);
}
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}