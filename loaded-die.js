/* 20171005 DM - LHL w1d4 - Closures - Exercise 1 – Loaded Die.

  This function, makeLoadedDie() which returns a function that
  when called, seems to generate random numbers between 1 and 6,
  but in fact returns numbers in a row from a hardcoded list.
*/
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  //Counter to keep track of the current die based on index.
  var i = 0;

  return function() {
    //Return value from index based on the counter then increment by 1.
    return list[i++];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6