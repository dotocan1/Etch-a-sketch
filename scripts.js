const container = document.getElementById('grid-container');

//creates the grid
for (let i = 1; i < 257; i++) {
    let gridItemTemp = document.createElement('div');
    //gridItemTemp.textContent = i;
    gridItemTemp.classList.toggle('grid-item');
    container.appendChild(gridItemTemp);
}

let gridItem = document.querySelectorAll('div');
const buttons = document.querySelectorAll('button');

//leaves a pixelated trail
gridItem.forEach(function (div) {
    div.addEventListener('mouseover', function () {
        if (div.className == 'grid-item') {
            div.classList.toggle('grid-item-hovered');
        }
    })
});

const clearGridButton = document.getElementById('clearGridButton');
const createNewGridButton = document.getElementById('createNewGridButton');


//clears the grid
clearGridButton.addEventListener('click', function () {
    gridItem.forEach(function (div) {
        if (div.className == 'grid-item grid-item-hovered') {
            div.classList.remove('grid-item-hovered');
        }
    })
})

createNewGridButton.addEventListener('click', function () {
    //deletes and creates a new grid
    let squaresPerSide = prompt('How many squares per side?');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    for (let i = 1; i < (squaresPerSide * squaresPerSide) + 1; i++) {

        let gridItemTemp = document.createElement('div');
        //gridItemTemp.textContent = i;
        gridItemTemp.classList.toggle('grid-item');
        container.appendChild(gridItemTemp);
    }

    const gridItemChange = document.querySelectorAll('div');

    //leaves a pixelated trail
    gridItemChange.forEach(function (div) {
        div.addEventListener('mouseover', function () {
            if (div.className == 'grid-item') {
                div.classList.toggle('grid-item-hovered');
            }
        })
    });
    return gridItem = document.querySelectorAll('div');
})