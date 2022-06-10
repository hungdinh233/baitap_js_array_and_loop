// bài tập 2: cho 1 mảng gồm các số tự nhiên, xuất ra số nào là số nguyên tố trong mảng

// ex2([2, 4, 5, 6, 8, 12, 15, 24, 23, 7]);
var array = [];
function themVaoMang() {
  var nhapSo = document.getElementById("input").value;
  if (nhapSo == "") {
    alert("nhập số vào bạn ơi!");
    return;
  } else {
    array.push(nhapSo);
    
    document.getElementById("show__array").innerHTML = array;
  }
}

function ex2() {
console.log("hello", array);
  var SoNguyenTo = [];
  for (var i = 0; i <= array.length; i++) {
    if (array[i] > 1 && array[i] % 2 !== 0 && array[i] % 3 !== 0) {
      SoNguyenTo.push(array[i]);
    //   console.log(SoNguyenTo);
    }
    if (array[i] === 2 || array[i] === 3) {
      SoNguyenTo.push(array[i]);
    }
  }
  console.log("số nguyên tố trong mảng là: ", SoNguyenTo);
  document.getElementById("result2").innerHTML = SoNguyenTo;
}
