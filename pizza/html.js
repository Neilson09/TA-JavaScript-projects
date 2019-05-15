function getReceipt() {
  var text1 = "<h3>You Ordered:</h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1 + selectedSize + "<br>";
    }
  }

  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  runningTotal = sizeTotal;
  console.log(selectedSize + " = $" + sizeTotal + ".00");
  console.log("size text1: " + text1);
  console.log("subtotal: $" + runningTotal + ".00");
  getToppings(runningTotal, text1);
}

function getToppings(runningTotal, text1) {
  var toppingsTotal = 0;
  var selectedToppings = [];
  var toppingsArray = document.getElementsByClassName("toppings");

  for (var j = 0; j < toppingsArray.length; j++) {
    if (toppingsArray[j].checked) {
      selectedtoppings.push(toppingsArray[j].value);
      console.log("selected toppings item: (" + toppingsArray[j].value + ")");
      text1 = text1 + toppingsArray[j].value + "<br>";
    }
  }
  var toppingsCount = selectedtoppings.length;
  if (toppingsCount > 1) {
    toppingsTotal = toppingsCount - 1;
  } else {
    toppingsTotal = 0;
  }

  function getToppings(runningTotal, text1) {
    var ToppingsTotal = 0;
    var selectedToppings = [];
    var ToppingsArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < ToppingsArray.length; j++) {
      if (toppingsArray[j].checked) {
        selectedToppings.push(ToppingsArray[j].value);
        console.log("selected Toppings item: (" + ToppingsArray[j].value + ")");
        text1 = text1 + ToppingsArray[j].value + "<br>";
      }
    }
    var ToppingsCount = selectedToppings.length;
    if (ToppingsCount > 1) {
      toppingsTotal = ToppingsCount - 1;
    } else {
      ToppingsTotal = 0;
    }
    runningTotal = runningTotal + toppingsTotal;
    console.log("total selected toppings items: " + toppingsCount);
    console.log(
      toppingsCount +
        " toppings - 1 free toppings = " +
        "$" +
        toppingsTotal +
        ".00"
    );
    console.log("toppings text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML =
      "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
  }

  toppings;

  getToppings(runningTotal, text1);

  //below held from calculator exercise for possible guideance
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var total = document.getElementById("total");

  function Calc() {
    var result = document.querySelector('input[name="calc"]:checked').value;
    var num1 = parseInt(text1.value);
    console.log(typeof num1);
    console.log(isNaN(num1));
    var num2 = parseInt(text2.value);
    console.log(typeof num2);
    console.log(isNaN(num2));
    if (result == "*") {
      total.innerHTML = (num1 * num2).toFixed(2);
    } else if (result == "/") {
      total.innerHTML = (num1 / num2).toFixed(2);
    } else if (result == "+") {
      total.innerHTML = (num1 + num2).toFixed(2);
    } else if (result == "-") {
      total.innerHTML = (num1 - num2).toFixed(2);
    }
  }
  function Clear() {
    txt1.value = "";
    txt2.value = "";
    total.innerHTML = "0.00";
  }
}
