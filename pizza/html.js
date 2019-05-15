

function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>;
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
}



for (var i = 0; i < sizeArray.length; i++) {
	if (sizeArray[i].checked) {
		var selectedSize = sizeArray[i].value;
		text1 = text1+selectedSize+"<br>";
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


















var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");
var total = document.getElementById("total");

function Calc() {
  var result = document.querySelector('input[name="calc"]:checked').value;
  var num1 = parseInt(txt1.value);
  console.log(typeof num1);
  console.log(isNaN(num1));
  var num2 = parseInt(txt2.value);
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
