export class RandomizerSystem {
    constructor(gameStateSystem) {
        this.gameStateSystem = gameStateSystem
    }

    generateRandomNumber(min, max){
        return this.gameStateSystem.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    }

    resetRandomNumber(){ 
        this.gameStateSystem.randomNumber = null
    }
}