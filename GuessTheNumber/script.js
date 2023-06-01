'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Correct Number!';

document.querySelector('.number').textContent=13;

document.querySelector('.score').textContent=20;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value=3;
*/
const secret_number= Math.trunc(Math.random()*20)+1;
let score=20;

document.querySelector('.number').textContent=secret_number;

document.querySelector('.check').addEventListener('click', function() {
    const guess= Number(document.querySelector('.guess').value);

    //When there is no input
    if(!guess){
        document.querySelector('.message').textContent='Add a number';
    }
    else if (guess == secret_number){
        document.querySelector('.message').textContent='Correct Number!';
    }
    else if (guess > secret_number){
        if (score>1){
        document.querySelector('.message').textContent =
        'Too high';
        score--;
        document.querySelector('.score').textContent=score;
       }
       else {
        document.querySelector('.message').textContent='You lost the game';
        document.querySelector('.score').textContent='0';
       }
}
    else if (guess< secret_number){
        if (score>1){
        document.querySelector('.message').textContent='Too low';
        score--;
        document.querySelector('.score').textContent=score;
    }
        else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent='0';
        }
}
});
