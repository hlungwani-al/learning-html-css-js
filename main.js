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
    alert('we are displaying the time now...')
}