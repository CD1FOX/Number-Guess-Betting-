export class EvaluationSystem {
    constructor(gameStateSystem){
        this.gameStateSystem = gameStateSystem
    }

    compareGuess() {
        if (this.gameStateSystem.numberGuess == this.gameStateSystem.randomNumber){
            this.gameStateSystem.coins += this.gameStateSystem.betAmount
            return `You won +${this.gameStateSystem.betAmount} coins`
        } else {
            this.gameStateSystem.coins -= this.gameStateSystem.betAmount
            return `You lose -${this.gameStateSystem.betAmount} coins`
        }
    }
}