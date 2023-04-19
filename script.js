// set variables
let gridSize = 16;
const mainDiv = document.querySelector(`#main`);


//loop to set put grid in div of html
for (i=0; i <= gridSize; i++) {
    const squareDiv = document.createElement(`div`);
    mainDiv.appendChild(squareDiv);
}