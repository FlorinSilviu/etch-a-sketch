const container = document.getElementById('container');
let rowDivs = [];
let rowSquares = [];

let numberOfRows = 16;
let numberOfSquares = 16;

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
                console.log(e);
                e.target.style.backgroundColor = 'black';
        })
    }
    }
}

// function deleteGrid() {
//     for(let i = 0; i < numberOfRows; i++) {
//         rowDivs[i].remove();
//     }
// }

createGrid(numberOfRows, numberOfSquares);

