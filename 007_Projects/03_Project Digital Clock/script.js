const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(function () {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());
    // clock.innerHTML = date.toLocaleDateString();
}, 1000)