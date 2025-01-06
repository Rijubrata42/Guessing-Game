'use strict';

let number=Math.trunc(Math.random()*20+1)
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='Please Enter a Number❔'
    }
    if(guess==number){
        document.querySelector('.message').textContent='Correct Guess!'
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').textContent=number;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=score
        }
    }
    if(score>1){
        if(guess>number){
        document.querySelector('.message').textContent='Guess is too High!📈'
        score--;
        document.querySelector('.score').textContent=score;
        }
        else if(guess<number){
            document.querySelector('.message').textContent='Guess is too Low!📉'
            score--;
            document.querySelector('.score').textContent=score;
        }
    }
    else{
        document.querySelector('.message').textContent='You Lost the Game⚔️'
        document.querySelector('.score').textContent=0;
    }
    
})

document.querySelector('.again').addEventListener('click',function(){
    number=Math.trunc(Math.random()*20+1);
    score=20
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='?';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
})


document.querySelector('.guess').addEventListener('keypress',function(e){
    if(e.key==='Enter' || 'numpadEnter'){
        const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent='Please Enter a Number❔'
    }
    if(guess==number){
        document.querySelector('.message').textContent='Correct Guess!'
        document.querySelector('body').style.backgroundColor='#60b347'
        document.querySelector('.number').textContent=number;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=score
        }
    }
    if(score>1){
        if(guess>number){
        document.querySelector('.message').textContent='Guess is too High!📈'
        score--;
        document.querySelector('.score').textContent=score;
        }
        else if(guess<number){
            document.querySelector('.message').textContent='Guess is too Low!📉'
            score--;
            document.querySelector('.score').textContent=score;
        }
    }
    else{
        document.querySelector('.message').textContent='You Lost the Game⚔️'
        document.querySelector('.score').textContent=0;
    }
    }
    
})