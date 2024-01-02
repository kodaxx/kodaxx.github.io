
let players = ['Player 1', 'Player 2']
let currentPlayer = 0

function changePlayer(number) {
    if (currentPlayer >= 0 && currentPlayer < players.length - 1) {
        let nextItem = players[currentPlayer + number]
        $('#playerName').html(`${nextItem}`);
        console.log("changed player")
    }
    console.log("pressed");
}

$("#right").on("click", function () {
    console.log("clicked")
    if (currentPlayer >= 0 && currentPlayer < players.length - 1) {
        let nextItem = players[currentPlayer + 1]
        $('#playerName').html(`${nextItem}`);
        console.log("changed player")
        currentPlayer++
    }
});

$("#left").on("click", function () {
    console.log("clicked")
    if (currentPlayer > 0) {
        let nextItem = players[currentPlayer - 1]
        $('#playerName').html(`${nextItem}`);
        console.log(`${nextItem}`)
        console.log(`${currentPlayer}`)
        currentPlayer--
    }
});

$(document).ready(function () {
    $("#instructionsBtn").click(function () {
        $("#panel").slideToggle("slow");
    });
});