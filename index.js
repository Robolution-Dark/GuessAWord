const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]

let word = ''
let attempt = 5
let number_of_guesses = 0
let guessed_char = []
let correct_guess = 0
let wrong_guess = 0
let random_word_index = 0
const totalWordList = wordList.length
var timerInterval

const getAWord = () => {
    let randNumber = Math.floor(Math.random() * totalWordList)
    let wordLength = wordList[randNumber].word.length
    word = wordList[randNumber].word
    let divWords = document.querySelector('#divWords')
    let divHints = document.querySelector('#divHints')
    divWords.innerHTML = ''
    divHints.innerHTML = ''
    let pHints = document.createElement('p')
    pHints.innerHTML = `Hints: ${wordList[randNumber].hint}`
    divHints.append(pHints)

    for(let i=0; i<wordLength; i++) {
        let input = document.createElement('input')
        input.type = 'text'
        input.id = `word-${i}`
        input.maxLength = 1
        divWords.append(input)
    }
    document.querySelector('#spanScore').innerHTML = correct_guess;
    setFocus();
}

const startTimer = () => {
    if (timerInterval) {
        clearInterval(timerInterval)
    }

    correct_guess = 0
    wrong_guess = 0
    let timer = document.querySelector('#timer')
    let maxSecond = 60;
    timer.innerHTML = maxSecond;
    timerInterval = setInterval(() => {
        if (maxSecond > 0) {
            maxSecond--;
            timer.innerHTML = maxSecond;
        }
        else {
            clearInterval(timerInterval)
            if (correct_guess > 0) {
                congratulation();
            }
            else {
                game_over();
            }
        }
    }, 1000);
}

const checkAnswer = () => {
    let allInput = document.querySelectorAll('input')
    let i = 0;
    let correct = 0;
    allInput.forEach(x => {
        let val = x.value.toLowerCase()
        if (val == word[i].toLowerCase()) {
            correct++;
        }
        i++
    })

    if (correct == word.length) {
        setScore();
        getAWord();
    }
    else {
        wrong_guess++
        if (wrong_guess == 5) {
            game_over();
        }

        let heart = document.querySelector('#heart')
        heart.src = `images/heart_${5-wrong_guess}.png`
    }
}

const clickButton = () => {
    checkAnswer();
}


let btnGuess = document.querySelector('#btnGuess')
btnGuess.addEventListener('click', clickButton)

const setFocus = () => {
    let allInput = document.querySelectorAll('input')
    allInput.forEach(x => {
        x.addEventListener('keyup', () => {
            if (!x.value) {
                if (x.previousElementSibling) {
                    x.previousElementSibling.focus()
                }
            }
            else {
                if (x.nextElementSibling) {
                    x.nextElementSibling.focus()
                }
            }
        })
    })
}

const game_over = () => {
    document.querySelector("#game_over").style.display = "block"
	document.querySelector("#new_game").style.display = "block";
}

const congratulation = () => {
    document.querySelector("#congratulations").style.display = "block"
	document.querySelector("#play_again").style.display = "block";
}

const setScore = () => {
    correct_guess++;
    document.querySelector('#spanScore').innerHTML = correct_guess;
}

document.querySelector("#new_game").addEventListener('click', () => {
    startTimer();
    getAWord();
    document.querySelector('#heart').src = `images/heart_5.png`
    document.querySelector("#game_over").style.display = "none"
    document.querySelector("#new_game").style.display = "none"
}) 

document.querySelector("#play_again").addEventListener('click', () => {
    startTimer();
    getAWord();
    document.querySelector('#heart').src = `images/heart_5.png`
    document.querySelector("#congratulations").style.display = "none"
    document.querySelector("#play_again").style.display = "none"
}) 

startTimer();
getAWord();