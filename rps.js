//idk how this works but with this assert you can make a function crash if the input is not what you want
const assert = require('assert');

//'you' is what you draw 'rock paper or siccors'
function rps(you) {
    assert(['rock','paper','siccors'].includes(you),"your entrie wasn't an valid option")
    //print correct thing according on wether you win or not
    console.log(Math.random() > 0.5 ? 
    'you win!\nyou: '+you+' | them: '+{'rock' : 'siccors' , 'paper' : 'rock' , 'siccors' : 'paper'}[you] : 
    'you lose!\nyou: '+you+' | them: '+ {'rock' : 'paper' , 'paper' : 'siccors' , 'siccors' : 'rock'}[you]);
}

rps('rock')
