let row= document.querySelector(".row");
let board = [];
let currentPlayer =  'X';

createBoard = () =>{
    for(let i = 0;i<3;i++)
{
    board[i] = [];
    for(let j = 0;j<3;j++)
    {
        board[i][j] = "";
        let a = document.createElement('div');
        a.classList.add("box")
        a.addEventListener('click',()=>{
            if(a.textContent === '')
            {
                a.textContent = currentPlayer;
                board[i][j] = currentPlayer;
                let ans = checkWinner(board,currentPlayer);
                if(ans){
                    
                    alert(`The winner is ${currentPlayer}`);
                    resetGame();
                    currentPlayer = 'X';
                }
                if(!ans)
                    currentPlayer = currentPlayer==='X'?'O':'X';
                
            }
        })
        row.appendChild(a);
    }
}
}

createBoard();
const checkWinner = (board, currentPlayer) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
    }
    
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === currentPlayer && board[1][j] === currentPlayer && board[2][j] === currentPlayer) {
            return true;
        }
    }
    
    // Check diagonals
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }

    return false; // No winner found
};
const resetGame = () => {
    // Clear the board array
    board = [];
    // Reset the current player
    currentPlayer = 'X';
    
    // Clear the displayed boxes
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.textContent = ''; // Clear the text content of each box
    });
    
    // Reinitialize the board array
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = "";
        }
    }
};
// const checkWinner=(board, currentPlayer)=>{
//     let row = 0;
//     let col = 0;
//     let rowBool = true;
//     // check horizontally
//     boolRow = true;
//     while(col < 3)
//     {
//         while(row<3)
//         {
//             if(board[row++][col]== currentPlayer){
//                 continue;
//             }else{
//                 boolRow = false;
//                 break;
//             }
//             // row++;
//         }
//         if(boolRow)
//         {
//             return true;
//         }
//         col++;
//     }
// }