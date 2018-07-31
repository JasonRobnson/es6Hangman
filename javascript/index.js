
const hangmanObj = {
    wordbank: ['foxx', 'pryor', 'rock', 'hope', 'hart', 'vandyke', 'seinfeld', 'mac'],
    answerBank: [],
    blankBank: [],
    letterBank: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ],
    usedLetterBank: ['a', 'b'], 
    counter: 0,
    guessLeft: 0, 
    gameWon: 0,
    documentWriter(idTag, objKeyPropPair) {
        document.getElementById(idTag).innerText = objKeyPropPair
    },
    revealBlanks(x) {
        return console.log('This reveals the blanks of the hidden answers!');
    },
    startGame(x) {
        this.keyListener();
        this.documentWriter('usedLetters', this.usedLetterBank);
        this.documentWriter('gameScore', this.counter)
        this.numberGenerator();
        this.answerSetup(hangmanWord);
        this.createUnderscores(hangmanWord);
        this.availableLetterHandler(hangmanObj.letterBank);
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
    },
    availableLetterHandler(letterBank) {
        document.getElementById("lettersAvailable").innerText = this.letterBank.toLocaleString().toUpperCase()
    }
}

let wordbankIndex = hangmanObj.numberGenerator();
let hangmanWord = hangmanObj.wordbank[wordbankIndex];

hangmanObj.startGame();

