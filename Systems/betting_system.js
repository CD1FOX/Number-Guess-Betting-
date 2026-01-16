export class BettingSystem{
    constructor(gameStateSystem, feedbackMessagingSystem) {
        this.gameStateSystem = gameStateSystem
    }

    setBetAmount(Amount){
        if (Amount <= 0) {
            return "Cannot bet less than 0"
        } else if (Amount > this.gameStateSystem.coins){
            return "Cannot bet greater than coins"
        }

        this.gameStateSystem.betAmount = Amount
        return null
    }

    setNumberGuess(number) {
        if (number < 1 || number > 5){
            return "Number must be range 1 - 5"
        }

        this.gameStateSystem.numberGuess = number
        return null
    }

    resetBets() {
        this.gameStateSystem.betAmount = null
        this.gameStateSystem.numberGuess = null
    }
}