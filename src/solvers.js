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
  
  const makeBoard = function (cols) {
    const board = new Board({'n': n});
    for (let i in cols) {
      board.togglePiece(i, cols[i]);
    }
    return board;
  }

  const checkSolution = function (cols) {
    return !makeBoard(cols).hasAnyQueensConflicts();
  }

  const isAllZeros = function (cols) {
    return cols.reduce((bool, num) => bool && num === 0, true);
  }

  let stop = 0;
  const cols = Array(n).fill(0);  
  cols[0] = -1;
  const stopper = Array(n).fill(n -1);
  let i = 0;
  outerloop:
  while (stop < 300) {
    cols[i]++;
    while (cols[i] === n && i < n) {
      cols[i] = 0;
      i++;
      continue outerloop;
    }
    if (i > 0) {
      i = 0;
    }

    // console.log('in while loop', i, JSON.stringify(cols));
    if (checkSolution(cols)) {
      let solution = makeBoard(cols).rows();
      console.log('Single solution for ' + n + ' queens:', solution);
      return solution;
    }
    if (JSON.stringify(cols) == JSON.stringify(stopper)) break;
  }
  return null;
};






// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
