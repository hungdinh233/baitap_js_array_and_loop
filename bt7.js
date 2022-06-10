function bangCuuChuong() {
    var n = document.getElementById("input").value;
    if(n ==""){
      alert("nhập n vào thì mới xuất được chớ >:<")
    }
    var times;
    for (var i = 0; i <= 10; i++) {
      times = n * i;
      console.log("", n, "x", i, "=", times);
     
    }
  }