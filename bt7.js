function bangCuuChuong() {
    var n = document.getElementById("input").value;
    var times;
    for (var i = 0; i <= 10; i++) {
      times = n * i;
      console.log("", n, "x", i, "=", times);
     
    }
  }