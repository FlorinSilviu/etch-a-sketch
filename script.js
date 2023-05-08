const container = document.getElementById('container');

let rowDivs = [];
let rowSquares = [];

let drawColor = 'black';

let numberOfRows = 16; //initial number of rows
let numberOfSquares = 16; //initial number of squares per row

function createGrid(rows, squares) {
    for(let i = 0; i < numberOfRows; i++) {
        rowDivs[i] = document.createElement('div');
        rowDivs[i].classList.add('rowdiv');
        container.appendChild(rowDivs[i]);
    }

    for(let i = 0; i < numberOfRows; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
            rowSquares[j] = document.createElement('div');
            rowSquares[j].classList.add('rowsquare');
            rowDivs[i].appendChild(rowSquares[j]);
            rowDivs[i].children[j].addEventListener('mouseenter', function(e) {
                e.target.style.backgroundColor = 'black';
        })
    }
    }
}

function deleteGrid() {
    for(let i = 0; i < numberOfRows; i++) {
        rowDivs[i].remove();
    }
}

createGrid(numberOfRows, numberOfSquares);

const choice = document.getElementById('size');
choice.addEventListener('click', function() {
    deleteGrid();
    const userInput = prompt("Please enter the number of squares (max. 100):");
    numberOfRows = (parseInt(userInput) > 100) ? 16 : parseInt(userInput);
    numberOfSquares = numberOfRows;
    createGrid(numberOfRows, numberOfSquares);
    enableRainbow();
})

const rainbow = document.getElementById('rainbow');

function randomizeColor() {
    drawColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return drawColor;
}

function enableRainbow() {
    for(let i = 0; i < numberOfRows; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
            rainbow.addEventListener('click', function() {
                rowDivs[i].children[j].addEventListener('mouseenter', function(e) {
                    e.target.style.backgroundColor = randomizeColor();
            })
            })
        }
    }
}

enableRainbow();

const clear = document.getElementById('clear');

clear.addEventListener('click', function() {
    for(let i = 0; i < numberOfRows; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
            rowDivs[i].children[j].style.backgroundColor = 'white';
        }
    }
})

const normal = document.getElementById('normal')

normal.addEventListener('click', function () {
    for(let i = 0; i < numberOfRows; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
            rowDivs[i].children[j].addEventListener('mouseenter', function(e) {
                e.target.style.backgroundColor = 'black';
        })
    }
    }
})

const eraser = document.getElementById('eraser')

eraser.addEventListener('click', function () {
    for(let i = 0; i < numberOfRows; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
            rowDivs[i].children[j].addEventListener('mouseenter', function(e) {
                e.target.style.backgroundColor = 'white';
        })
    }
    }
})

// const shadow = document.getElementById('shadow');

// let gradualArr = [];

// for(let i = 0; i < 10; i++) {
//     if(i <= 8) {
//         gradualArr[i] = `RGBA(0,0,0,0.${i+1})`;
//     }
//     else {
//         gradualArr[i] = `RGBA(0,0,0)`
//     }
// }

// shadow.addEventListener('click', function () {
//     for(let i = 0; i < numberOfRows; i++) {
//         for(let j = 0; j < numberOfSquares; j++) {
//             rowDivs[i].children[j].addEventListener('mouseenter', function(e) {
//                e.target.style.backgroundColor = gradualArr[0];
//         })
//     }
//     }
// })

// `RGBA(0,0,0,${0.1})`