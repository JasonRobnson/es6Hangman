
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
        this.numberGenerator();
        this.answerSetup(hangmanWord);
        this.createUnderscores(hangmanWord);
    },
    keyListener() {
        document.addEventListener('keypress', (event) => {
            let keyCode = event.charCode
            let character = String.fromCharCode(keyCode);
            return character; 
        })
    },
    answerSetup(chosenWord){
        let answer = chosenWord; 
        return this.answerBank.push(answer);
    },
    createUnderscores(chosenWord) {
        let underscores = chosenWord.toString().split("").map(x => '_')
        this.blankBank.push(underscores)
        document.getElementById("blanksForAnswer").innerText = this.blankBank.map( blanks => blanks.join(' '))
    },
    numberGenerator() {
       let randomNumber = Math.floor(Math.random() * hangmanObj.wordbank.length)
       return randomNumber;
    }
}

let wordbankIndex = hangmanObj.numberGenerator();
let hangmanWord = hangmanObj.wordbank[wordbankIndex];

hangmanObj.keyListener();
hangmanObj.startGame();

