const game = prompt('Would you like to play a game?');

if (game === 'yes' || game === 'Yes') {
    const username = prompt('What is your username?');
    const grant = 'Almighty Grant';
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let uResult = 40;
    let gResult = 10;
    let uWin = 0;

while (uResult >= 1 && gResult >= 1 && uWin <= 2) {
    uResult -= randomNum(1, 2);
    console.log(`${username} has ${uResult} health left.`);
    gResult -= randomNum(1, 2);
    console.log(`${grant} has ${gResult} left.`);

    if (gResult <= 0 && uWin === 0) {
    uWin++;
    console.log(`${username} has ${uWin} win!`);
    gResult = 10;

    } else if (gResult <= 0 && uWin <= 1) {
        uWin++;
        console.log(`${username} has ${uWin} wins!`);
        gResult = 10;

    } else if (gResult <= 0 && uWin >= 2) {
        console.log(`WINNER: ${username}!`);

    } else if (uResult <= 0) {
        console.log(`WINNER: ${grant}!`);

    }
} 
}
