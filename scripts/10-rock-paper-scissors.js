 const score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement();

        function resetScore() {
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();
        }
        
        function playGame(playerMove){

            const computerMove = pickComputerMove();
             let result = ''; // This should be set based on user input 
            if(playerMove === 'Scissors') {
               
                if(computerMove === 'Scissors') {
                    result='It\'s a tie';
                } else if (computerMove === 'Rock') {
                    result='You lose.';
                } else {
                    result='You wins.';
                }
            }else if(playerMove === 'Paper') {
               
                if(computerMove === 'Paper') {
                    result='It\'s a tie';
                } else if (computerMove === 'Scissors') {
                    result='You lose.';
                } else {
                    result='You wins.';
                }
            } else if(playerMove === 'Rock') {
               
                if(computerMove === 'Rock') {
                    result='It\'s a tie';
                } else if (computerMove === 'Paper') {
                    result='You lose.';
                } else {
                    result='You wins.';
                }
            }

            if(result === 'You wins.') {
                score.wins++;
            } else if(result === 'You lose.') {
                score.losses++;
            } else {
                score.ties++;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-picked').innerHTML = ` You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;

        }

        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        function pickComputerMove() {
            const randomNumber = Math.random();
            let computerMove = '';
            if(randomNumber>=0 && randomNumber < 0.33) {
                computerMove='Rock';
            } else if (randomNumber>=0.33 && randomNumber < 0.66) {
                computerMove='Paper';
            } else if(randomNumber>=0.66 && randomNumber < 1)  {
                computerMove='Scissors';
            }

            return computerMove;
        }
