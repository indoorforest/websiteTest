// Button action handlers
function addNumbers() {
  myNums = returnNums();
  var answer = parseFloat(myNums[0]) + parseFloat(myNums[1]);
  printAnswer(answer);
}

var subtractNumbers = function() {
  myNums = returnNums();
  var answer = parseFloat(myNums[0]) - parseFloat(myNums[1]);
  printAnswer(answer);
}

var multiplyNumbers = function() {
  myNums = returnNums();
  var answer = parseFloat(myNums[0]) * parseFloat(myNums[1]);
  printAnswer(answer);
}

var divideNumbers = function() {
  myNums = returnNums();
  var answer = parseFloat(myNums[0]) / parseFloat(myNums[1]);
  printAnswer(answer);
}

// Print calculation answer to the answer ID
var printAnswer = function(answer) {
  document.getElementById("answer").innerHTML = answer;
}

// Get the inputted numbers and return as array of the two inputted nums.
var returnNums = function() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  return [num1, num2];
}
// add nums to an array.  suppose [3,1,4]. num is: 10^ (array.length - i + 1)
//    * array[i]
//    for (int i = 0; i < nums.length; i++) {
//      myNum += nums[i] * 10 ^ (nums.length - i);
//    }
