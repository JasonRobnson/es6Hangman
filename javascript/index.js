
const hangmanObj = {
    wordbank: ['foxx', 'pryor', 'rock', 'hope', 'hart', 'vandyke', 'seinfeld', 'mac'],
    answerBank: [],
    blankBank: [],
    letterBank: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ],
    usedLetterBank: [], 
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
        //StartGame is working!
        this.documentWriter('gameScore', this.counter);
        this.numberGenerator();
        this.answerSetup(hangmanWord);
        this.keyListener(this.answerBank);
        this.createUnderscores(hangmanWord);
        this.availableLetterHandler(hangmanObj.letterBank);
        
    },
    keyListener(answerBank) {
        //KeyListener Working!
        document.addEventListener('keypress', (event) => {
            const keyCode = event.charCode;
            const character = String.fromCharCode(keyCode).toLowerCase();
            this.usedLetterChecker(character);
        })
    },
    answerSetup(chosenWord){
        //Answer Setup is working!
        let answer = chosenWord; 
        console.log(answer)
        return this.answerBank.push(answer);
    },
    createUnderscores(chosenWord) {
        //createUnder scores is working!
        let underscores = chosenWord.toString().split("").map(x => '_')
        this.blankBank.push(underscores);
        this.documentWriter('blanksForAnswer', this.blankBank.map( blanks => blanks.join(' ')));
    },
    numberGenerator() {
        //Num generate is working!
       let randomNumber = Math.floor(Math.random() * hangmanObj.wordbank.length);
       return randomNumber;
    },
    availableLetterHandler(letterBank) {
        //Available number generator is working!
        this.documentWriter('lettersAvailable', this.letterBank.toLocaleString().toUpperCase());
    },
    usedLetterHandler(usedLetter) {
        //usedLetter Handler working!
       this.documentWriter('usedLetters', this.usedLetterBank.map( usedLet => usedLet.toUpperCase())) 
    },
    answerUpdater(displayAnswerBank, answerBank) {

    },
    winChecker() {
        console.log("This Function Checks GuessesLeft");
    },
    usedLetterChecker(userCharacter) {
        //used letter checker is working!
        if( this.usedLetterBank.includes(userCharacter)) {
            console.log("Sorry, That letter has been used already!");
        } else {
            this.usedLetterBank.push(userCharacter);
            this.usedLetterHandler(userCharacter);
            this.answerChecker(userCharacter);
        }
    },
    answerChecker(character){
           this.answerBank.toString().split("").find((element) => { 
                if (element == character) {
                    this.blankBank.push(character);
                    this.usedLetterBank.push(character);
                    console.log("This is the blankBank Array " + this.blankBank);
                } else {
                    this.usedLetterBank.push(character);
                    console.log("This is the used LetterBank Array " + this.usedLetterBank)
                };
            })
    }

};

let wordbankIndex = hangmanObj.numberGenerator();
let hangmanWord = hangmanObj.wordbank[wordbankIndex];

hangmanObj.startGame();

