/* 20171005 DM - LHL w1d4 - Closures - Exercise 2 - Countdown.

  This function countdownGenerator() takes in a number x
  and returns a function that counts down when it is called.
*/

var countdownGenerator = function (x) {

  return function(){
      if (x > 0){
        // Start/keep counting down until 0...
        console.log("T-minus " + x + "...");

      } else if (x == 0) {
        // Blast off at the end of countdown.
        console.log("Blast Off!");

      } else {
        // Continue displaying rockets are gone.
        console.log("Rockets already gone, bub!");
      }
      //Countdown by 1 every countdown call.
      x--;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!