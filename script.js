const container = document.getElementById('container');

let rowDivs = [];
let rowSquares = [];

let color = 'black';

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
    color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
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