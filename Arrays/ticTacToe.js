function tttooe(arr){
    let initialBoard = [[false,false,false],
                        [false,false,false],
                        [false,false,false]];
    let first = true;
    for( one of arr){
        let [x,y] = one.split(" ");
        if(initialBoard[x][y]){
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        
        let marker = first ?  'X' : 'O';
        initialBoard[x][y] = marker;

        if(checkWin(initialBoard,marker)){
            console.log(`Player ${marker} wins!`);
            return printDB(initialBoard);
            
        }

        if(!checkFree(initialBoard)){
            console.log('The game ended! Nobody wins :(');
            return printDB(initialBoard);
            
        }

        
        first = !first;
      
    }

    function checkWin(initialBoard,marker){
        for(let i = 0; i < initialBoard.length; i++){
            if(initialBoard[i][0] ==marker &&
                initialBoard[i][1] ==marker && 
                initialBoard[i][2] ==marker)return true;
            else if( initialBoard[0][i] ==marker &&initialBoard[1][i] ==marker && initialBoard[2][i] ==marker) return true;
            else if (initialBoard[0][0] == marker && initialBoard[1][1] == marker && initialBoard[2][2] == marker ) return true;
            else if (initialBoard[2][0] == marker && initialBoard[1][1] == marker && initialBoard[0][2] == marker ) return true;
        }
    }

    function checkFree(dashboard){
        return !!dashboard.flat().filter( x => !x).length;
    }

    function printDB(board){
        board.forEach( row => {
            console.log(row.join('\t'));
        })
    }
}

tttooe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"])

        //Player O wins!
            //O    X    X
            //X    O    X
            //O  false  O