
const hangmanObj = {
    wordbank: ['foxx', 'pryor', 'rock', 'hope', 'hart', 'vandyke', 'seinfeld', 'mac'],
    blankBank: [],
    letterBank: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ],
    usedWordBank: [], 
    counter: 0,
    guessLeft: 0, 
    gameWon: 0,
    counterAdder(x) {
       return  console.log('This is from the counterAdder!');
    },
    revealBlanks(x) {
        return console.log('This reveals the blanks of the hidden answers!');
    },
    startGame(x) {
        return console.log('This starts the game, and starts it again when invoke!' );
    },
    keyListener(x) {
        return console.log('This should listen to any key events on the screen when invoked, not sure if this will work as a method, but will try');
    }
}
