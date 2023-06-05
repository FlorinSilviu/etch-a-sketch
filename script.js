const container = document.getElementById('container');

let rowDivs = [];
let rowSquares = [];

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
            rowDivs[i].children[j].style.backgroundColor = 'white';
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
})

const rainbow = document.getElementById('rainbow');

function randomizeColor() {
    drawColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return drawColor;
}

rainbow.addEventListener('click', function() {
    for(let i = 0; i < numberOfRows; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
            rowDivs[i].children[j].addEventListener('mouseenter', function(e) {
                e.target.style.backgroundColor = randomizeColor();
            })
        }
    }
})

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

//

let gradualArr = [];

for(let i = 0; i < 10; i++) {
    if(i <= 8) {
        gradualArr[i] = `rgba(0, 0, 0, 0.${i+1})`;
    }
    else {
        gradualArr[i] = `rgb(0, 0, 0)`
    }
}

const shadow = document.getElementById('shadow');

function graduallyColor(drawColor) {
    switch(drawColor) {
        case gradualArr[0]: drawColor = gradualArr[1];
                            break;
        case gradualArr[1]: drawColor = gradualArr[2];
                            break;
        case gradualArr[2]: drawColor = gradualArr[3];
                            break;
        case gradualArr[3]: drawColor = gradualArr[4];
                            break;  
        case gradualArr[4]: drawColor = gradualArr[5];
                            break;
        case gradualArr[5]: drawColor = gradualArr[6];
                            break;
        case gradualArr[6]: drawColor = gradualArr[7];
                            break;
        case gradualArr[7]: drawColor = gradualArr[8];
                            break;   
        case gradualArr[8]: drawColor = gradualArr[9];
                            break;
        case gradualArr[9]: drawColor = gradualArr[9];
                            break;
        default: drawColor = gradualArr[0];
                            break;                  
    }
    return drawColor;
}

shadow.addEventListener('click', function() {
    deleteGrid()
    createGrid(numberOfRows, numberOfSquares);
    for(let i = 0; i < numberOfRows; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
            rowDivs[i].children[j].addEventListener('mouseenter', function(e) {
                console.log(e.target.style.backgroundColor);
                e.target.style.backgroundColor = graduallyColor(e.target.style.backgroundColor);
            })
        }
    }
})


