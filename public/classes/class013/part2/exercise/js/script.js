let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'brown',
    'black',
    'white',
    'gray',
    'cyan',
    'magenta',
    'lime',
    'teal',
    'navy',
    'maroon',
    'gold',
    'silver'
];

function clicked(id) {
    let random = Math.floor(Math.random() * colors.length - 1);
    let button = document.getElementById(id);
    button.style.backgroundColor = colors[random];
    button.innerHTML = colors[random];
    button.style.color = 'black';
}
