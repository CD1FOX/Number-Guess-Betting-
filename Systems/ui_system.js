export function UISystem(gameStateSystem, bettingSystem, randomizerSystem, evaluationSystem, feedbackMessagingSystem) {
    const coinsDisplay = document.querySelector(".coins-display")
    const betAmountError = document.querySelector(".bet-amount-error")
    const betAmountInput = document.querySelector(".bet-amount-input")
    const numberGuessError = document.querySelector(".guess-number-error")
    const numberGuessInput = document.querySelector(".guess-number-input")
    const playButton = document.querySelector(".play-btn")
    const randomNumberResultDisplay = document.querySelector(".random-number-result")
    const coinsResultDisplay = document.querySelector(".won-lost-coins-result")

    feedbackMessagingSystem.showMessage(coinsDisplay, `Coins: ${gameStateSystem.coins}`)

    playButton.addEventListener("click", ()=> {
        const betAmount = parseInt(betAmountInput.value, 10)
        const numberGuess = parseInt(numberGuessInput.value, 10)
        
        const betAmountMessage = bettingSystem.setBetAmount(betAmount)

        if (betAmountMessage){
            feedbackMessagingSystem.showMessage(betAmountError, betAmountMessage)
        } else {
            feedbackMessagingSystem.showMessage(betAmountError, "")
        }

        const numberGuessMessage = bettingSystem.setNumberGuess(numberGuess)

        if (numberGuessMessage) {
            feedbackMessagingSystem.showMessage(numberGuessError, numberGuessMessage)
        } else {
            feedbackMessagingSystem.showMessage(numberGuessError, "")
        }

        randomizerSystem.generateRandomNumber(1, 5)
        feedbackMessagingSystem.showMessage(randomNumberResultDisplay, `The random number is ${gameStateSystem.randomNumber}` )
        
        
        const evaluationMessage = evaluationSystem.compareGuess()

        if (evaluationMessage){
            feedbackMessagingSystem.showMessage(coinsResultDisplay, evaluationMessage)
        }

        feedbackMessagingSystem.showMessage(coinsDisplay, `Coins: ${gameStateSystem.coins}`)

        bettingSystem.resetBets()
        randomizerSystem.resetRandomNumber()
    })
}