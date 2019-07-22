let winCombos = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

const playerOne = "X";
const playerTwo = "O";

let board = document.querySelectorAll(".box");
let newGame = document.querySelector('.reset');
let newText = document.querySelector('.resetBtn');


let previousPlayer = [];
let targetArr = [];
function playGame(){
    for(let i=0 ; i< board.length; i++){   
        board[i].addEventListener("click", function(e){
            targetArr.push(e.target.id);
            console.log(targetArr);
            if(board[i].innerHTML !== ''){
                document.querySelector('.boxTaken').style.display = 'block';
                document.querySelector('.boxTakenBtn').addEventListener('click',function(){
                    document.querySelector('.boxTaken').style.display = 'none';
                })

            }else if(previousPlayer.length % 2 === 0){
                e.target.innerHTML = playerOne;
                previousPlayer.push(playerOne);
            }else if(previousPlayer.length % 2 !== 0){
                e.target.innerHTML = playerTwo;
                previousPlayer.push(playerTwo);
            }
            winnerX();
            winnerO();
        });
    }
}
playGame();

function winnerDisplay(player){
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.winner h3').innerHTML = player + ' Wins';
}


function winnerX(){
    for(let i =0; i < board.length-6; i++){
        if(board[0].innerHTML === 'X' && board[1].innerHTML === 'X' && board[2].innerHTML === 'X'){
            winnerDisplay('X');
        }else if(board[3].innerHTML === 'X' && board[4].innerHTML === 'X' && board[5].innerHTML === 'X'){
            winnerDisplay('X');
            
        }else if(board[6].innerHTML === 'X' && board[7].innerHTML === 'X' && board[8].innerHTML === 'X'){
            winnerDisplay('X');
        }else if(board[0].innerHTML === 'X' && board[3].innerHTML === 'X' && board[6].innerHTML === 'X'){
            winnerDisplay('X');
        }else if(board[1].innerHTML === 'X' && board[4].innerHTML === 'X' && board[7].innerHTML === 'X'){
            winnerDisplay('X');
        }else if(board[2].innerHTML === 'X' && board[5].innerHTML === 'X' && board[8].innerHTML === 'X'){
            winnerDisplay('X');
        }else if(board[0].innerHTML === 'X' && board[4].innerHTML === 'X' && board[8].innerHTML === 'X'){
            winnerDisplay('X');
        }else if(board[2].innerHTML === 'X' && board[4].innerHTML === 'X' && board[6].innerHTML === 'X'){
            winnerDisplay('X');
        }
    }
}


function winnerO(){
    for(let i =0; i < board.length-6; i++){
        if(board[0].innerHTML === 'O' && board[1].innerHTML === 'O' && board[2].innerHTML === 'O'){
            winnerDisplay('O');
        }else if(board[3].innerHTML === 'O' && board[4].innerHTML === 'O' && board[5].innerHTML === 'O'){
            winnerDisplay('O');
        }else if(board[6].innerHTML === 'O' && board[7].innerHTML === 'O' && board[8].innerHTML === 'O'){
            winnerDisplay('O');
        }else if(board[0].innerHTML === 'O' && board[3].innerHTML === 'O' && board[6].innerHTML === 'O'){
            winnerDisplay('O');
        }else if(board[1].innerHTML === 'O' && board[4].innerHTML === 'O' && board[7].innerHTML === 'O'){
            winnerDisplay('O');
        }else if(board[2].innerHTML === 'O' && board[5].innerHTML === 'O' && board[8].innerHTML === 'O'){
            winnerDisplay('O');
        }else if(board[0].innerHTML === 'O' && board[4].innerHTML === 'O' && board[8].innerHTML === 'O'){
            winnerDisplay('O');
        }else if(board[2].innerHTML === 'O' && board[4].innerHTML === 'O' && board[6].innerHTML === 'O'){
            winnerDisplay('O');
        }
    }
}






function startNewGame(){
    for(let i =0; i < board.length; i++){
        board[i].innerHTML = '';
    }
    previousPlayer = []; 
    targetArr = [];
}
newGame.addEventListener('click', startNewGame);

document.querySelector('.newGame').addEventListener('click', function(){
    document.querySelector('.winner').style.display = 'none';
    for(let i =0; i < board.length; i++){
        board[i].innerHTML = '';
    }
    previousPlayer = []; 
    targetArr = [];
})
