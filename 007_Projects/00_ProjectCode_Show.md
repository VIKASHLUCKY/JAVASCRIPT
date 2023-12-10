## Project 1 solution Color Changer

```HTML CODE
<!-- HTML CODE -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BG Color Changer</title>

    <!-- css link -->
    <link rel="stylesheet" href="style.css">


</head>

<body>
    <h1 class="heading">Color Scheme Switcher</h1>
    <div class="main">



        <div class="button" id="grey">Click Here</div>
        <div class="button" id="white">Click Here</div>
        <div class="button" id="blue">Click Here</div>
        <div class="button" id="yellow">Click Here</div>
        <div class="button" id="pink">Click Here</div>

    </div>

    <h2 class="heading">Try clicking on one of the collors above

        <span>to change the background color of this page !</span>
    </h2>
</body>

<!-- script js link -->
<script src="script.js"></script>

</html>


```

``` CSS CODE
/* CSS CODE */
.main {
    height: 200px;
    width: 500px;
    margin: auto;
    padding-top: 20px;
}

.heading {
    text-align: center;

}

h1 {
    border-bottom: 5px solid black;
}



.button {
    border: 2px solid black;
    height: 100px;
    width: 100px;
    margin: 10px;




}

#grey {
    /* text-align: center; */
    background-color: grey;

}

#white {

    background-color: white;
}

#blue {

    background-color: blue;
}

#yellow {

    background-color: yellow;
}

.main {
    display: flex;
}


```

```JAVASCRIPT CODE
// JAVASCRIPT CODE
const buttons = document.querySelectorAll('.button');
// console.log(buttons)         //  all buttons & Div  here
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);                // all button only here
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)

        if (e.target.id === 'grey') {
            // body.style.backgroundColor = "grey"
            body.style.backgroundColor = e.target.id;

        }
        if (e.target.id === 'white') {
            // body.style.backgroundColor = "grey"
            body.style.backgroundColor = e.target.id;

        }
        if (e.target.id === 'blue') {
            // body.style.backgroundColor = "grey"
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            // body.style.backgroundColor = "grey"
            body.style.backgroundColor = e.target.id;
        }

        // Only Try
        if (e.target.id === 'pink') {
            // body.style.backgroundColor = "grey"
            body.style.backgroundColor = e.target.id;
            body.style.color = "red";
        }
    });
});



```


## Project 2 solution BMI Calculator

```HTML CODE 
<!-- HTML CODE  -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>

    <!-- css link -->
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div class="container">
        <h1>BMI Calculator</h1>

        <form action="">
            <label for="">Height in CM :</label> <input type="text" placeholder="Input height" id="height" />
            <label for="">Weight in KG :</label> <input type="text" placeholder="Input width" id="weight" />
            <button>Calulate</button>
            <div id="results">Show Result Heare</div>
            <div id="weight-guide">
                <h2>BMI weight Guide</h2>

                <p>Under Weight = Less than 18.6</p>
                <p>Normal Range = 18.6 and 24.9</p>
                <p>Overweight = Greater than 24.9</p>

            </div>
        </form>
    </div>

</body>
<!-- script link -->
<script src="script.js"></script>

</html>


```

``` CSS CODE

/* CSS CODE */
body {
    background-color: gray;
}

.container {
    height: 500px;
    width: 500px;
    margin: auto;
    padding: 50px;
    border: 2px solid peru;
    background-color: violet;
    border-radius: 10px;

}

h1 {
    text-align: center;
    border-bottom: 5px solid peru;
}


label {
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;

}




input {
    width: 100%;
    height: 30px;
    /* border-radius: 2%; */
    margin: 8px;

}

button {
    text-align: center;
    width: 100%;
    font-size: 25px;
    color: white;
    background-color: green;
    margin: 8px;
}

#results {
    color: red;
    font-size: 22px;
    font-family: 'Times New Roman', Times, serif;
    padding-top: 10px;
}

h2 {
    text-align: center;
    border-bottom: 5px solid red;
    margin-top: 35px;
}

p {
    text-align: center;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
```

```JAVASCRIPT CODE

// JAVASCRIPT CODE

const form = document.querySelector('form')
// this usecase will given your empty
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;

    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
```

## Project solution 3 Digital Clock

```HTML CODE
<!-- HTML CODE -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Time</title>
</head>

<!-- Css Start -->
<style>
    body {
        background-color: #212121;
        color: #fff;
    }

    .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
    }
</style>
<!-- Css End -->

<body>

    <div class="center">
        <div id="banner">
            <h2>Your Local Time</h2>
        </div>
        <div id="clock"></div>
    </div>

</body>

<!-- script link -->
<script src="script.js"></script>

</html>

```

```JAVASCRIPT CODE
// JAVASCRIPT CODE

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function () {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());
    // clock.innerHTML = date.toLocaleDateString();
}, 1000)
```

## Project 4  Solution Guesses

``` HTML CODE
<!-- HTML CODE -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GuessTheNumber</title>

    <!-- Css Link -->
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <div class="main">
        <div id="wrapper">
            <h1>Number Guessing Game</h1>
            <p>Try and guess a random number between 1 and 100.</p>
            <p>You have 10 attempts to guess the right number.</p>
        </div>
        <br>
        <form class="form">

            <label for="guessField" id="guess">Guess a number</label><br>

            <input type="text" id="guessField" class="guessField" /><br>
            <input type="submit" id="subt" value="Submit guess" class="guessSubmit" />
        </form>

        <div class="resultParas">
            <p>Previous Guesses : <span class="guesses"></span></p>
            <p>Guesses Remaining : <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
</body>

<!-- script link -->
<script src="script.js"></script>

</html>


```

```CSS CODE
/* CSS CODE  */
body {
    background-color: #212121;
    color: #fff;
}

.main {
    display: flex;
    height: 95vh;
    width: 80vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 2px solid violet;
    margin: auto;
}



#guessField {
    width: 50vh;
    margin-top: 10px;
    padding: 10px;
}


#subt {
    width: 53vh;
    margin-top: 10px;

    padding: 10px;
    background-color: green;
    color: #fff;



}

label {
    font-size: 55px;
    color: chocolate;

}

p {
    font-size: 20px;
}

```

```JAVASCRIPT
// JAVASCRIPT CODE 
let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a  number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is To low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is To High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function endGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}

```