/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let foo = new Board({'n':n});
  for ( let i in foo.rows() ) {
    let arr = foo.rows()[i];
    arr[i] = 1;
  }
  const solution = foo.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }

  const solutionCount = product;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let emptyBoard = new Board({'n': n});
  let row = 0;
  //console.log(board.rows())
   const recurse = function(n, board, row) {
     for (let col = 0; col < n; col++) { 
      // board.rows()[row].forEach(function(element, col) {
        let newBoard = 0;
        newBoard = new Board(board.rows());
      //console.log('before', newBoard.rows());
        newBoard.togglePiece(row, col);
        console.log('row =', row, 'col =', col, newBoard.rows());
        if (row < n - 1) {
        return recurse(n, newBoard, row + 1);
        } else {
         if (!newBoard.hasAnyQueensConflicts()) {
            return newBoard;
          }
        }
      };
    }
   let solution = recurse(n, emptyBoard, row);
   console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution)); 
   return solution;
}





// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
