// set variables
let gridSize;
const mainDiv = document.querySelector(`#main`);
const btn = document.querySelector(`button`);


//loop to set put grid in div of html


btn.addEventListener(`click`, ()=> {
    gridSize = prompt(`Enter grid size up to 100: `);
    if (gridSize > 100) {
        gridSize = prompt(`Please enter a number up to 100: `);
    }
    setGrid();
});

const setGrid = () => {
    for (i=0; i < gridSize; i++) {
        const squareDiv = document.createElement(`div`);
        mainDiv.appendChild(squareDiv);
        squareDiv.classList.add(`sketch`);
        squareDiv.addEventListener(`mouseover`, ()=> {
            squareDiv.classList.add(`sketch-over`);
        })
    }
}
