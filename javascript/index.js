
const hangmanObj = {
    wordbank: ['foxx', 'pryor', 'rock', 'hope', 'hart', 'vandyke', 'seinfeld', 'mac'],
    answerBank: [],
    displayAnswerBank: [],
    blankBank: [],
    letterBank: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ],
    usedLetterBank: ['a', 'b'], 
    counter: 0,
    guessLeft: 5, 
    gameWon: 0,
    documentWriter(idTag, objKeyPropPair) {
        document.getElementById(idTag).innerText = objKeyPropPair
    },
    revealBlanks(x) {
        return console.log('This reveals the blanks of the hidden answers!');
    },
    startGame(x) {
        let upperCaseUsed = hangmanObj.usedLetterBank.map( usedLet => usedLet.toUpperCase())
        this.documentWriter('usedLetters', upperCaseUsed);
        this.documentWriter('gameScore', this.counter);
        this.numberGenerator();
        this.answerSetup(hangmanWord);
        this.keyListener(this.answerBank);
        this.createUnderscores(hangmanWord);
        this.availableLetterHandler(hangmanObj.letterBank);
    },
    keyListener(answerBank) {
        document.addEventListener('keypress', (event) => {
         const keyCode = event.charCode;
         const character = String.fromCharCode(keyCode).toLowerCase();
         const result = this.answerBank.toString().split("").filter( word => word == character )
         this.displayAnswerBank.push(result)
         console.log(result)
         let replacer = `/${character}/g`
         console.log(replacer)
         this.answerBank.toString().replace(replacer, '')
        return console.log(this.answerBank)
         console.log(this.displayAnswerBank);
            })
        },
    answerSetup(chosenWord){
        let answer = chosenWord; 
        console.log(answer)
        return this.answerBank.push(answer);
    },
    createUnderscores(chosenWord) {
        let underscores = chosenWord.toString().split("").map(x => '_')
        this.blankBank.push(underscores);
        this.documentWriter('blanksForAnswer', this.blankBank.map( blanks => blanks.join(' ')));
    },
    numberGenerator() {
       let randomNumber = Math.floor(Math.random() * hangmanObj.wordbank.length);
       return randomNumber;
    },
    availableLetterHandler(letterBank) {
        this.documentWriter('lettersAvailable', this.letterBank.toLocaleString().toUpperCase());
    },
    answerUpdater(displayAnswerBank, answerBank) {

    },
    winChecker() {
        console.log("This Function Checks GuessesLeft");
    }
};

let wordbankIndex = hangmanObj.numberGenerator();
let hangmanWord = hangmanObj.wordbank[wordbankIndex];

hangmanObj.startGame();

