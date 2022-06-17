function check() {
     let num = +document.getElementById("num").value;
     
     if (num%2 == 0) {
          document.getElementById("result").innerHTML = "So chan";
     } else {
          document.getElementById("result").innerHTML = "So le";
     }
}