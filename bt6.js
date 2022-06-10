function findX() {
    var sum = 0;
    var res;
    for (var i = 1; i < 100; i++) {
      sum += i;
      if (sum <= 100) {
        res = i;
      }
    }
    document.getElementById("result1").innerHTML = res;
  }