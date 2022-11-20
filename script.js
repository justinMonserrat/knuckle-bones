window.onload = function() {
    initialize();
}

function initialize() {
    //Create gameboards
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            // <span id = "r-c" class="tile"></span>
            let tile = document.createElement("button");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("gameboard").appendChild(tile);
        }
    }
}

function roll() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = randomNumber;    
}
