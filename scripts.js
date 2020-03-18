const container = document.getElementById('grid-container');

//creates the grid
for (let i = 0; i < 256; i++) {
    let gridItem = document.createElement('div');
    gridItem.textContent = i;
    gridItem.classList.toggle('grid-item');
    container.appendChild(gridItem);
}



const gridItem = document.querySelectorAll('div');
const buttons = document.querySelectorAll('button');

//leaves a pixelated trail
gridItem.forEach(function (div) {
    div.addEventListener('mouseover', function () {
        if (div.className == 'grid-item') {
            div.classList.toggle('grid-item-hovered');
        }
    })
});

//clears the grid

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        //works
        gridItem.forEach(function (div) {
            console.log(div.className);
            if (div.className == 'grid-item grid-item-hovered') {
                div.classList.remove('grid-item-hovered');
                console.log(div.classList);
            }
        })
    })
});
