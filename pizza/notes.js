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
