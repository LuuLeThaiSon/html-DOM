function check() {
    let year = +document.getElementById("year").value;
    
    if (year%4==0) {
        if (year%100==0) {
            if (year%400==0) {
                document.getElementById("result").innerHTML = "nam nhuan";
            } else {
                document.getElementById("result").innerHTML = "khong phai nam nhuan";
            }
        } else {
            document.getElementById("result").innerHTML = "nam nhuan";
        }
    } else {
        document.getElementById("result").innerHTML = "khong phai nam nhuan";
    }
}

