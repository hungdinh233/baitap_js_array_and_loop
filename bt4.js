function ex4() {
  var n = document.getElementById("input").value;
  var countUocSo = 0;
  var uocSo = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      countUocSo++;
      uocSo.push(i);
      // // // hoặc có thể viết như này thì sẽ xuất ra dạng str
      // uocSo += i;
    }
  }
  document.getElementById("result1").innerHTML = uocSo;
  // console.log("ước số của n là số: ", uocSo);
  document.getElementById("result2").innerHTML = countUocSo;
  // console.log("số lượng ước số của n là: ", countUocSo, "số");
}
