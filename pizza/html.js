var selectedSize = document.querySelector('input[name="size"]:checked').value;
var selectedCrust = document.querySelector('input[name="crust"]:checked').value;
var selectedSauce = document.querySelector('input[name="sauce"]:checked').value;
var selectedCheese = document.querySelector('input[name="cheese"]:checked')
  .value;
var toppingsArray = document.getElementsByClassName("toppings");

if (selectedSize === "personal") {
  sizeTotal = 6;
} else if (selectedSize === "medium") {
  sizeTotal = 10;
} else if (selectedSize === "large") {
  sizeTotal = 14;
} else if (selectedSize === "XL") {
  sizeTotal = 16;
}
console.log(selectedSize);
var toppingsArray = document.getElementsByClassName("toppings");

function getToppings() {
  var selectedToppings = document.querySelectorAll('input[name="toppings"]');
  for (var j = 0; j < toppingsArray.length; j++) {
    if (toppingsArray[j].checked) {
      count++;
      selectedToppings.push(toppingsArray[j].value);
      console.log(selectedToppings);
    }
  }
}
console.log(selectedToppings);

/*

    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");*/
