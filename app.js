/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;
init();


// document.querySelector('#current-' + activePlayer).textContent = dice;
// var x = document.querySelector('#score-1').textContent
// console.log(x);



document.querySelector('.btn-roll').addEventListener('click', function () {

    //Do something here 
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display the result 

    var diceDOM =
        document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';


    //3. Updte the round score If the rolled number was NOT a 1 

    if (dice !== 1) {

        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {

        // Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        // if (activePlayer === 0) {
        //     activePlayer = 1;

        // } else

        // {
        //     activePlayer = 0;
        // }

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

    }

    document.querySelector('.btn-hold').addEventListener('click', function(){
        // current score
    });



});

document.querySelector('.btn-hold').addEventListener('click' , function(){
//add current score to global score 
scores[activePlayer] += roundScore;


//update the ui 
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//check if player won the game 

if(scores[activePlayer] >= 20){
    document.querySelector('#name-' + activePlayer).textContent = 'winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}

else{

    //Next player

nextPlayer();
}






});

function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // if (activePlayer === 0) {
    //     activePlayer = 1;

    // } else

    // {
    //     activePlayer = 0;
    // }

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';


}

document.querySelector('.btn-new').addEventListener('click' , init);


function init(){
    scores = [0 , 0];
    activePlayer = 0;
    roundScore = 0;

    
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

}