let colorList = [
    'red',
    'blue',
    'green',
    'purple',
    'yellow',
    'grey'
];

const colorButtons = document.getElementById('colored-buttons');
const bodyBlocks = document.getElementById('body-blocks');
const danceButtons = document.getElementById('dance-buttons');

for(let i = 0; i < colorList.length; i++) {
    let colorButton = colorList[i];
    const createButton = document.createElement('button');
    createButton.classList.add('button-row', colorButton);
    createButton.textContent = colorButton;
    
    createButton.addEventListener('click', function() {
        paint(colorButton);
    });

    colorButtons.appendChild(createButton);
}

for(let i = 0; i < colorList.length; i++) {
    let danceButton = colorList[i];
    const createDanceButton = document.createElement('button');
    createDanceButton.classList.add('monster-dance', danceButton);
    createDanceButton.textContent = danceButton;

    createDanceButton.addEventListener('click', function(){
        remove(danceButton);
        transform(danceButton);
    });
    
    danceButtons.appendChild(createDanceButton);
}

function paint(colorButton) {
    const bodyAdd = document.createElement('span');
    bodyAdd.classList.add('color-piece', colorButton);

    bodyBlocks.appendChild(bodyAdd);
}

function transform(colorButton) {
    const selector = '.color-piece.' + colorButton;
    const danceChange = document.querySelectorAll(selector);

    for(let i = 0; i < danceChange.length; i++) {
        danceChange[i].classList.add('transform');
    }
}

function remove(){
    const colorChange = document.querySelectorAll('.color-piece');
    for(let i = 0; i < colorChange.length; i++) {
        colorChange[i].classList.remove('transform');
    }
}





