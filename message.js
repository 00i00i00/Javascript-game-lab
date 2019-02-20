startGame();

function startGame() {
    const game = prompt('Would you like to play a game?');
    if (game.toLowerCase().trim() === 'yes') {
        const username = prompt('What is your username?');
        startCombat(username);
    }
}

function startCombat(username) {
    const grant = 'Almighty Grant';
    const getDamage = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let uResult = 40;
    let gResult = 10;
    let uWin = 0;

    while (uResult > 0 && uWin < 3) {
        const attack = prompt(`${username}, would you like to attack or quit?`);
        if (attack.toLowerCase().trim() === 'attack') {
            uResult -= getDamage(1, 5);
            console.log(`${username} has ${uResult} health left.`);
            gResult -= getDamage(1, 5);
            console.log(`${grant} has ${gResult} left.`);

            if (gResult <= 0) {
                uWin++;
                console.log(`${username} has ${uWin} win${uWin > 1 ? 's' : ''}!`);
                gResult = 10;
            }
        } else {
            return
        }
    }

        if (uWin > 2) {
            console.log(`WINNER: ${username}!`);
        } else {
            console.log(`WINNER: ${grant}!`);
        }

}