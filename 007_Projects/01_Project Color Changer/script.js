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

