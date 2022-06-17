function addition() {
     let number1 = +document.getElementById("num1").value;
     let number2 = +document.getElementById("num2").value;
     let sum = number1 + number2;
     let result = "Kết quả là " + sum;
     document.getElementById("result").innerHTML = result;
}

function subtraction() {
     let number1 = +document.getElementById("num1").value;
     let number2 = +document.getElementById("num2").value;
     let difference = number1 - number2;
     let result = "Kết quả là " + difference;
     document.getElementById("result").innerHTML = result;
}

function multiplication() {
     let number1 = +document.getElementById("num1").value;
     let number2 = +document.getElementById("num2").value;
     let product = number1 * number2;
     let result = "Kết quả là " + product;
     document.getElementById("result").innerHTML = result;
}

function division() {
     let number1 = +document.getElementById("num1").value;
     let number2 = +document.getElementById("num2").value;
     let divide = number1 / number2;
     let result = "Kết quả là " + divide;
     document.getElementById("result").innerHTML = result;
}
