// let winCombos = [[0,1,2],
// [3,4,5],
// [6,7,8],
// [0,3,6],
// [1,4,7],
// [2,5,8],
// [0,4,8],
// [2,4,6]
// ];

const playerOne = "X";
const playerTwo = "O";

let board = document.querySelectorAll(".box");
let newGame = document.querySelector('.reset');
let newText = document.querySelector('.resetBtn');


let previousPlayer = [];
let targetArr = [];

function playGame() {
    for (let i = 0; i < board.length; i++) {
        board[i].addEventListener("click", function (e) {

            if (board[i].innerHTML !== '') {
                document.querySelector('.boxTaken').style.display = 'block';
                document.querySelector('.boxTakenBtn').addEventListener('click', function () {
                    document.querySelector('.boxTaken').style.display = 'none';
                })

            } else if (previousPlayer.length % 2 === 0) {
                e.target.innerHTML = playerOne;
                previousPlayer.push(playerOne);
            } else if (previousPlayer.length % 2 !== 0) {
                e.target.innerHTML = playerTwo;
                previousPlayer.push(playerTwo);
            }
            winnerX();
            winnerO();
            tie();
        });
    }
}
playGame();

function tie() {
    if (board[0].innerHTML !== '' && board[1].innerHTML !== '' && board[2].innerHTML !== '' && board[3].innerHTML !== '' && board[4].innerHTML !== '' && board[5].innerHTML !== '' && board[6].innerHTML !== '' && board[7].innerHTML !== '' && board[8].innerHTML !== '') {
        document.querySelector('.tie').style.display = 'block';
        document.querySelector('.winner').style.height = '0';
        document.querySelector('.winner h3').innerHTML = '';
        document.querySelector('.newGame').style.display = 'none';
    }
}
document.querySelector('.newGame2').addEventListener('click', function () {
    document.querySelector('.tie').style.display = 'none';
})




function winnerDisplay(player) {
    document.querySelector('.newGame').style.display = 'block';
    document.querySelector('.winner h3').innerHTML = player + ' Wins';
    document.querySelector('.winner').style.height = '75%';
}

function winnerX() {
    for (let i = 0; i < board.length - 6; i++) {
        if (board[0].innerHTML === 'X' && board[1].innerHTML === 'X' && board[2].innerHTML === 'X') {
            winnerDisplay('player One');
        } else if (board[3].innerHTML === 'X' && board[4].innerHTML === 'X' && board[5].innerHTML === 'X') {
            winnerDisplay('player One');

        } else if (board[6].innerHTML === 'X' && board[7].innerHTML === 'X' && board[8].innerHTML === 'X') {
            winnerDisplay('player One');
        } else if (board[0].innerHTML === 'X' && board[3].innerHTML === 'X' && board[6].innerHTML === 'X') {
            winnerDisplay('player One');
        } else if (board[1].innerHTML === 'X' && board[4].innerHTML === 'X' && board[7].innerHTML === 'X') {
            winnerDisplay('player One');
        } else if (board[2].innerHTML === 'X' && board[5].innerHTML === 'X' && board[8].innerHTML === 'X') {
            winnerDisplay('player One');
        } else if (board[0].innerHTML === 'X' && board[4].innerHTML === 'X' && board[8].innerHTML === 'X') {
            winnerDisplay('player One');
        } else if (board[2].innerHTML === 'X' && board[4].innerHTML === 'X' && board[6].innerHTML === 'X') {
            winnerDisplay('player One');
        }
    }
}


function winnerO() {
    for (let i = 0; i < board.length - 6; i++) {
        if (board[0].innerHTML === 'O' && board[1].innerHTML === 'O' && board[2].innerHTML === 'O') {
            winnerDisplay('player Two');
        } else if (board[3].innerHTML === 'O' && board[4].innerHTML === 'O' && board[5].innerHTML === 'O') {
            winnerDisplay('player Two');
        } else if (board[6].innerHTML === 'O' && board[7].innerHTML === 'O' && board[8].innerHTML === 'O') {
            winnerDisplay('player Two');
        } else if (board[0].innerHTML === 'O' && board[3].innerHTML === 'O' && board[6].innerHTML === 'O') {
            winnerDisplay('player Two');
        } else if (board[1].innerHTML === 'O' && board[4].innerHTML === 'O' && board[7].innerHTML === 'O') {
            winnerDisplay('player Two');
        } else if (board[2].innerHTML === 'O' && board[5].innerHTML === 'O' && board[8].innerHTML === 'O') {
            winnerDisplay('player Two');
        } else if (board[0].innerHTML === 'O' && board[4].innerHTML === 'O' && board[8].innerHTML === 'O') {
            winnerDisplay('player Two');
        } else if (board[2].innerHTML === 'O' && board[4].innerHTML === 'O' && board[6].innerHTML === 'O') {
            winnerDisplay('player Two');
        }
    }
}






function startNewGame() {
    for (let i = 0; i < board.length; i++) {
        board[i].innerHTML = '';
    }

    previousPlayer = [];
    targetArr = [];
}
newGame.addEventListener('click', startNewGame);
document.querySelector('.newGame2').addEventListener('click', startNewGame);

document.querySelector('.newGame').addEventListener('click', function () {

    document.querySelector('.winner').style.height = '0%';
    document.querySelector('.newGame').style.display = 'none';
    document.querySelector('.winner h3').innerHTML = '';

    for (let i = 0; i < board.length; i++) {
        board[i].innerHTML = '';
    }
    previousPlayer = [];
    targetArr = [];
});
