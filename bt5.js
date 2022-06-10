function ex5() {
  var n = document.getElementById("input").value;
  console.log("sadfsad", n);
  if (n == "") {
    alert("Vui lòng nhập số vào!");
    return;
  }

  var temp = [];
  for (var i = n.length - 1; i >= 0; i--) {
    temp += n[i];
  }
  document.getElementById("result1").innerHTML = temp;
}
