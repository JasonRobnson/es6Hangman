
const hangmanObj = {
    wordbank: ['foxx', 'pryor', 'rock', 'hope', 'hart', 'vandyke', 'seinfeld', 'mac'],
    blankBank: [],
    letterBank: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' ],
    counter: 0,
    gameScore: 0,
    counterAdder(x) {
       return  console.log('This is from the counterAdder!')
    }
}


hangmanObj.counterAdder();