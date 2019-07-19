let winCombos = [[0,1,2],
[0,4,8],
[0,3,6],
[3,4,5],
[6,7,8],
[6,4,2],
[2,5,7],
[2,5,8]
];

const playerOne = "X";
const playerTwo = "O";

let board = document.querySelectorAll(".box");
let newGame = document.querySelector('.reset');
let newText = document.querySelector('.resetBtn');



function playGame(){
    let previousPlayer = [];
    for(let i=0 ; i< board.length; i++){   
        board[i].addEventListener("click", function(e){
            
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
        });
    }
}
playGame();



function startNewGame(){
    for(let i =0; i < board.length; i++){
        board[i].innerHTML = '';
    }
    previousPlayer = []; 
}
newGame.addEventListener('click', startNewGame);

