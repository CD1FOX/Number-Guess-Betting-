export class GameStateSystem{
    constructor(){
        this.coins = 100
        this.currentBet = null
        this.numberGuess = null
    }

    setBetAmount(coinAmount) {
        this.currentBet = coinAmount
    }

    setNumberGuess(numberGuess) {
        this.numberGuess = numberGuess
    }

}