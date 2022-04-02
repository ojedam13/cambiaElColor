let colors = ['blue', 'yellow', 'black', 'red', 'green', 'orange', 'pink','grey'];

let button = document.getElementById('button');

button.addEventListener('click', function (){
    var changeColor = colors[Math.floor(Math.random() * colors.length)] 

    let container = document.getElementById('container');

    container.style.background = changeColor;

});