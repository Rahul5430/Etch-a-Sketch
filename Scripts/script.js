const container = document.querySelector("#container");
let cellColor = "#0310ea";
let colorFill = "mono";
let gridSize, borderWidth, totalWidth, cell, cells, cellLength;

container.addEventListener("mouseover", changeColor);
window.onresize = resizeCells();
makeGrid();

function resizeCells() {
    borderWidth = gridSize * 2;
    cells = document.getElementsByClassName("cells");
    totalWidth = document.getElementById("container").offsetWidth;
    cellLength = (totalWidth - borderWidth) / gridSize;
    for ( let i = 0; i < cells.length; i++) {
        cells[i].style.width = cellLength + "px";
        cells[i].style.height = cellLength + "px";
    };
};

function changeColor() {
    cells = document.getElementsByClassName("cells");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", ()=>{
            switch (colorFill) {
                case "mono":
                    cells[i].style.backgroundColor = cellColor;
                    break;
                case "random":
                    cells[i].style.backgroundColor = randomColors();
                    break;
            }
        });
    };
};

function  makeGrid() {
    container.textContent = "";
    gridSize = document.getElementById("gridSize").value || 16;
    borderWidth = gridSize * 2;
    totalWidth = document.getElementById("container").offsetWidth;
    cellLength = (totalWidth - borderWidth) / gridSize;

    for (let i = 0; i < (gridSize * gridSize); i++) {
        cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cells');
        cell.style.width = cellLength + "px";
        cell.style.height = cellLength + "px";
        cell.style.border = "1px solid #000000";
    };
};

function switchColors() {
    const switchbtnvalue = document.getElementById("btn2").value;
    console.log(switchbtnvalue);
    switch (switchbtnvalue) {
        case "mono":
            document.getElementById("btn2").value = "random";
            document.getElementById("btn2").innerHTML = "Monochromatic";
            colorFill = "random";
            break;
        case "random":
            document.getElementById("btn2").value = "mono";
            document.getElementById("btn2").innerHTML = "Random Colors";
            colorFill = "mono";
            break;
    }
};

function randomColors() {
    let red, green, blue;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
};