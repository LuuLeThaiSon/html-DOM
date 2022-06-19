function check() {
     let num = +document.getElementById("num").value;

     if (num==0) {
          document.getElementById("result").innerHTML = "nhap lai";
     }
     if (num%2 == 0) {
          document.getElementById("result").innerHTML = num + " la so chan";
     } else {
          document.getElementById("result").innerHTML = num + " la so le";
     }
}