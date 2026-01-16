import { GameStateSystem } from "./Systems/game_state_system.js";
import { BettingSystem } from "./Systems/betting_system.js";
import { RandomizerSystem } from "./Systems/randomizer_system.js";
import { EvaluationSystem } from "./Systems/evaluation_system.js";
import { FeedbackMessagingSystem } from "./Systems/feedback_messaging_system.js";
import { UISystem } from "./Systems/ui_system.js";


const gameStateSystem = new GameStateSystem()
const bettingSystem = new BettingSystem(gameStateSystem)
const randomizerSystem = new RandomizerSystem(gameStateSystem)
const evaluationSystem = new EvaluationSystem(gameStateSystem)
const feedbackMessagingSystem = new FeedbackMessagingSystem()
const uiSystem = new UISystem(gameStateSystem, bettingSystem, randomizerSystem, evaluationSystem, feedbackMessagingSystem)
