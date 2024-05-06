import Trivia from '../../assets/images/Trivia.png';
import Spy from '../../assets/images/Spy.png';
import Answer from '../../assets/images/Answer.png';
import WouldYouRather from '../../assets/images/WouldYouRather.png';
import './mainPage.css'

export const gameData = [
    {
        id: 1,
        name: "trivia",
        title: "Crazy Trivia",
        tags: ["short", "drinking"],
        trailer: "You think you know it all?",
        description: "Test your knowledge with Crazy Trivia! Answer a series of challenging questions and see how well you do. Challenge your friends and see who can will win!",
        image: Trivia,
        class: "blue",
        link: "/trivia"
    },
    {
        id: 2,
        name: "spy",
        title: "The Spy",
        tags: ["short", "drinking"],
        trailer: "Hidding is all.",
        description: "The Spy is a game of strategy and deception. Players must work together to uncover the spy in their midst. Can you find the spy before it's too late?",
        image: Spy,
        class: "orange",
        link: "/spy"
    },
    {
        id: 3,
        name: "answer",
        title: "Answer",
        tags: ["short", "funny"],
        trailer: "Don't by shy. Just do it.",
        description: "Answer is a game of quick thinking and fast reflexes. Players must answer a series of questions before time runs out. Can you answer them all?",
        image: Answer,
        class: "pink",
        link: "/answer"
    }
    ,
    {
        id: 4,
        name: "rather",
        title: "Would You Rather",
        tags: ["short", "funny"],
        trailer: "What would you do?",
        description: "You must choose between two equally challenging options. Can you make the right choice?",
        image: WouldYouRather,
        class: "purple",
        link: "/would-you-rather"
    }
]