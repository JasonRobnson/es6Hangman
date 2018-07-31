
const hangmanObj = {
    wordbank: ['foxx', 'pryor', 'rock', 'hope', 'hart', 'vandyke', 'seinfeld', 'mac'],
    answerBank: [],
    blankBank: [],
    letterBank: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ],
    usedLetterBank: [], 
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
        document.addEventListener('keypress', (event) => {
            let keyCode = event.charCode
            let character = String.fromCharCode(keyCode);
            console.log(character)
            return character 
        })
    },
    answerSetup(chosenWord){
        let answer = chosenWord; 
        return this.answerBank.push(answer)
    },
    createUnderscores(answerBank) {
        console.log(answerBank);
        let underscores = answerBank.toString().split("").map(x => '_')
        return this.blankBank.push(underscores)
        console.log(hangmanObj.blankBank)
    }

}

let numberGenerator = Math.floor(Math.random() * hangmanObj.wordbank.length);
let solutionWord = hangmanObj.wordbank[numberGenerator];

hangmanObj.keyListener();
hangmanObj.answerSetup(solutionWord);
hangmanObj.createUnderscores(hangmanObj.answerBank);
