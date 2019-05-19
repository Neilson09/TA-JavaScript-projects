//For our first step, we will need to begin our first function and declare and initialize our variables:
function getReceipt() {
  var text1 = "<h3>You Ordered:</h3>"; //This is a string that will show a list of selected items.
  var runningTotal = 0; //This is a numeric value and will be the running total for all the selected items.
  var sizeTotal = 0; //This is a numeric value and will be the subtotal of the selected pizza size.
  var sizeArray = document.getElementsByClassName("size"); //This is an array of all the input options from the "Size" section.
}
//BELOW iterate through sizeArray with a FOR LOOPS and then use an IF STATEMENT to determing
//each selected item from that array and print it to text1
for (var i = 0; i < sizeArray.length; i++) {
  if (sizeArray[i].checked) {
    var selectedSize = sizeArray[i].value; //here, we declare a new variable, 'selectedSize',
    //and set it to store the NEXT (only 1 at a time) selected item from sizeArray so it can
    //be added to the text1 string that prints to the receipt.
    text1 = text1 + selectedSize + "<br>"; //Ending with <br> both forces a new line within
    //text1 which prevents overwriting the previous stored value, but also should look better
    //on the receipt, if I correctly understand
  }
}
if (selectedSize === "personal pizza") {
  sizeTotal = 6;
} else if (selectedSize === "medium pizza") {
  sizeTotal = 10;
} else if (selectedSize === "large pizza") {
  sizeTotal = 14;
} else if (selectedSize === "extra large pizza") {
  sizeTotal = 16;
}
//need to iterate through toppings and have each selected item's value
//concatenated into text1 (or whatever works with my naming conventions).
//then need to count all selected items except 1 and add $1per to total.
//SO: if (toppingsArray[i].checked) {
//var selectedToppings = toppingsArray[i].value;
//will move them 1 at a time, I EITHER need to add each value to the receipt, then start that IF LOOP
//again and figure out how to get that quantity minus one added as the toppingsTotal,
//OR figure out how to move the selected toppings into an array so they stay there - ARRAY.FROM() -?????
//and concatentate each onto the receipt plus the toppingsTotal same as above
/*********************************************************************************************************/
var toppingsArray = document.getElementsByClassName("toppings");
var selectedToppings = [];
for (var i = 0; i < toppingsArray.length; i++) {
  if (toppingsArray[i].checked) {
    selectedToppings.push(toppingsArray[i].value);
  }
}
console.log(selectedToppings);

var selectedToppings = new Array.from(toppingsArray[i].checked);
console.log(selectedToppings);

var toppingsArray = document.getElementsByClassName("toppings");

//WHERE DOES THE RUNNING TOTAL FROM TA COME IN?
runningTotal = sizeTotal;
runningTotal = sizeTotal + toppingsTotal + cheeseTotal; //????????????????
getToppings(runningTotal, text1);
/*************************************************************************************************************/
function getToppings(runningTotal, text1) {
  var toppingsTotal = 0; //$
  var selectedToppings = []; //Array with all topping options
  //var selectedToppings = new Array.from(toppingsArray[i].checked);
  var toppingsArray = document.getElementsByClassName("toppings");
  //changing 'j' from TA code to i, because I didn't use i for the size as did TA
  for (var i = 0; i < toppingsArray.length; i++) {
    if (toppingsArray[i].checked) {
      selectedToppings.push(toppingsArray[i].value);
      console.log("selected toppings: (" + toppingsArray[i].value + ")");
      text1 = text1 + toppingsArray[i].value + "<br>";
    }
  }
  var toppingsCount = selectedToppings.length;
  if (toppingsCount > 1) {
    toppingsTotal = toppingsCount - 1;
  } else {
    toppingsTotal = 0;
  }
}
