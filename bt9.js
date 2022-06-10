function findNumberOfDogsAndChickens() {
  var m = document.getElementById("input1").value;
  var n = document.getElementById("input2").value;
  {
    if (m == "" || n == "") {
      alert("Bạn phải nhập đủ thông tin thì t mới tính được cho bạn!");
    }
  }
  var soCho, soGa, delta, deltaX, deltaY;
  delta = 2;
  deltaX = 4 * m - n;
  deltaY = n - 2 * m;

  soCho = deltaY / delta;
  soGa = deltaX / delta;
  // console.log(soGa);
  if (soGa % Math.ceil(soGa) > 0 || soCho % Math.ceil(soCho) > 0) {
    console.log("bài toán vô nghiệm vì số gà và chó không nguyên!");
    alert("bài toán vô nghiệm vì số gà và chó không nguyên!");
  }
  if (soGa < 0 || soCho < 0) {
    alert("Không tồn tại trường hợp này!!");
  } else {
    console.log("số gà là", soGa, "số chó là", soCho);
    document.getElementById("result1").innerHTML = soCho;
    document.getElementById("result2").innerHTML = soGa;
  }
}
