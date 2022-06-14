// bài tập 2: cho 1 mảng gồm các số tự nhiên, xuất ra số nào là số nguyên tố trong mảng

// ex2([2, 4, 5, 6, 8, 12, 15, 24, 23, 7]);
var array = [];
function themVaoMang() {
  var nhapSo = document.getElementById("input").value;
  if (nhapSo == "") {
    return alert("nhập số vào bạn ơi!");
   
  } else {
    array.push(nhapSo);
    
    document.getElementById("show__array").innerHTML = array;
  }
}

function ex2() {
  var SoNguyenTo = [];
  for (var i = 0; i <= array.length; i++) {
    if (array[i] > 1 && array[i] % 2 !== 0 && array[i] % 3 !== 0) {
      SoNguyenTo.push(array[i]);
    //   console.log(SoNguyenTo);
    }
    else if (i=== 2) {
      SoNguyenTo.push(2);
    }
    else if (i === 3) {
      SoNguyenTo.push(3)
    }
  
  }
  console.log("số nguyên tố trong mảng là: ", SoNguyenTo);
  document.getElementById("result2").innerHTML = SoNguyenTo;
}
