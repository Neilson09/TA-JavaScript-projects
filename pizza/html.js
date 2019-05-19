var text = "Confirm your order:";
var runningTotal = 0;
var sizeTotal = 0;
var cheeseTotal = 0;
var selectedSize = document.querySelector('input[name="size"]:checked').value;
if (selectedSize === "personal pizza") {
  sizeTotal = 6;
} else if (selectedSize === "medium pizza") {
  sizeTotal = 10;
} else if (selectedSize === "large pizza") {
  sizeTotal = 14;
} else if (selectedSize === "extra large pizza") {
  sizeTotal = 16;
}
text = text + " " + " " + selectedSize; // + ", $" + sizeTotal + ".00";
runningTotal = sizeTotal;
var selectedCrust = document.querySelector('input[name="crust"]:checked').value;
text = text + " with " + selectedCrust + ", ";
var selectedSauce = document.querySelector('input[name="sauce"]:checked').value;
text = text + selectedSauce + ", ";
var selectedCheese = document.querySelector('input[name="cheese"]:checked')
  .value;
if (selectedCheese === "extra cheese") {
  cheeseTotal = 3;
}
text = text + selectedCheese + ", and ";
runningTotal = runningTotal + cheeseTotal;
var toppingsTotal = 0;
var toppingsArray = document.getElementsByClassName("toppings");
var selectedToppings = [];
for (var i = 0; i < toppingsArray.length; i++) {
  if (toppingsArray[i].checked) {
    selectedToppings.push(toppingsArray[i].value);
    text = text + selectedToppings + " ";
  }
}
var toppingsCount = selectedToppings.length;
if (toppingsCount > 1) {
  toppingsTotal = toppingsCount - 1;
} else {
  toppingsTotal = 0;
}
runningTotal = runningTotal + toppingsTotal;
text = text + "TOTAL: $" + runningTotal + ".00";
document.getElementByClassName("total").innerHTML = text;

/*
  document.getElementById("showText").innerHTML = text;
  document.getElementById("totalPrice").innerHTML =
    */
//ctrl+shft+J in Chrome instead of ctrl+shft+I for console log
