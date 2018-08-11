
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
        this.documentWriter('guessesLeft', this.guessLeft)
        this.numberGenerator();
        this.answerSetup(hangmanWord);
        this.keyListener(this.answerBank);
        this.createUnderscores(hangmanWord);     
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
    usedLetterHandler(usedLetter) {
        //usedLetter Handler working!
       this.documentWriter('usedLetters', this.usedLetterBank.map( usedLet => usedLet.toUpperCase())) 
    },
    winChecker() {
        //WinChecker Works!
        if (this.guessLeft === 0 ) {
            alert("GameOver Suckah!");
        } else if ( 0 === this.answerBank) {
           console.log("The else if clause!");
        }
        
    },
    usedLetterChecker(userCharacter) {
        //used letter checker is working!
        if(this.usedLetterBank.includes(userCharacter)) {
            --this.guessLeft
            this.documentWriter('guessesLeft', this.guessLeft)
            console.log("Sorry, That letter has been used already!");
           this.winChecker();
        } else {
            this.usedLetterBank.push(userCharacter);
            this.usedLetterHandler(userCharacter);
            this.answerChecker(userCharacter);
            this.underscoreReplacer(userCharacter)
        }
    },
    answerChecker(userCharacter){
        //AnswerChecker Work!
        let answerCheckerWord = hangmanWord.split("")
        if (answerCheckerWord.includes(userCharacter)) {
            console.log("It's in it!");
        } else {
            --this.guessLeft
            this.documentWriter('guessesLeft', this.guessLeft);
            console.log("It's not in it!");
            this.winChecker();
        }
    },
    underscoreReplacer(character){
      let index = this.answerBank.toString().split("").indexOf(character);
       this.blankBank.splice(index, 1, character)
       this.documentWriter('blanksForAnswer', this.blankBank)
        console.log(this.blankBank)
        console.log(index)
    }
};

let wordbankIndex = hangmanObj.numberGenerator();
let hangmanWord = hangmanObj.wordbank[wordbankIndex];

hangmanObj.startGame();

  // Questions for help, ES6 to handle two characters in a word, and also replacing blank with characters at specific index