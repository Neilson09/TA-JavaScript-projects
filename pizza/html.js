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

var toppingsArray = document.getElementsByClassName("toppings");
var selectedToppings = [];
for (var i = 0; i < toppingsArray.length; i++) {
  if (toppingsArray[i].checked) {
    selectedToppings.push(toppingsArray[i].value);
  }
}

"Confirm your order:" <
  br >
  +selectedSize + ", $" + sizeTotal + ".00" <
  br >
  +selectedCrust <
  br >
  +selectedSauce <
  br >
  +selectedCheese + ", $" + cheeseTotal + ".00" <
  br >
  +selectedToppings + ", $" + toppingsTotal + ".00" <
  br >
  function getToppings() {
    var selectedToppings = document.querySelectorAll(
      'input[name="toppings"]:checked'
    );
    for (var j = 0; j < selectedToppingsArray.length; j++) {
      if (toppingsArray[j].checked) {
        count++;
        selectedToppings.push(toppingsArray[j].value);
        console.log(selectedToppings);
      }
    }
  };
console.log(selectedToppings);

/*
ctrl+shft+J in Chrome instead of ctrl+shft+I for console log
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
*/
var selectedCrust = document.querySelector('input[name="crust"]:checked').value;
var selectedSauce = document.querySelector('input[name="sauce"]:checked').value;
var selectedCheese = document.querySelector('input[name="cheese"]:checked')
  .value;
