/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0 ;
activePlayer = 1;

document.querySelector(".dice").style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';  

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. random number
   var dice = Math.floor(Math.random() * 6) + 1;

    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //3. update the round score IF the rolled number is NOT 1
    if (dice !== 1) {
        // add score 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player 
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector.querySelector('.dice').style.display = 'none';
    }
})


//var x = document.querySelector("#current-"+activePlayer).textContent = dice;
// Example of how to add HTML to a JS file-must be in quotes or the browser will 
//try to read it as part of the JS code 
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';
// shows that you can GET an element to read it not just set it 
//var x = document.querySelector('#score-0').textContent;