// bài tập 1: in bảng 10 hàng 10 cột từ 1 đến 100 thỏa các điều kiện để bài
var res = "";
for (var i = 1; i <= 100; i += 10) {
  for (var k = 0; k < 10; k++) {
    res += k + i + "   ";
  }
  res += "\n";
}
console.log(res);

// bài tập 2: cho 1 mảng gồm các số tự nhiên, xuất ra số nào là số nguyên tố trong mảng

ex2([2, 4, 5, 6, 8, 12, 15, 24, 23, 7]);

function ex2(arr2) {
  var SoNguyenTo = [];
  for (var i = 0; i <= arr2.length; i++) {
    if (arr2[i] > 1 && arr2[i] % 2 !== 0 && arr2[i] % 3 !== 0) {
      // SoNguyenTo += arr2[i] + " ";
      SoNguyenTo.push(arr2[i]);
    }
    if (arr2[i] === 2 || arr2[i] === 3) {
      // SoNguyenTo += arr2[i] + " ";
      SoNguyenTo.push(arr2[i]);
    }
  }
  console.log("số nguyên tố trong mảng là: ", SoNguyenTo);
}

// bài tập 3: viết function nhập vào n tính S= (2+3+4+...+n)+ 2n
countSum(199);
function countSum(n) {
  var sum = 0;
  var finalSum;
  for (var i = 2; i <= n; i++) {
    sum += i;
  }
  finalSum = sum + 2 * n;
  console.log(finalSum);
}

// bài tập 4: viết function nhận tham số n , tìm số lượng ước số của n

ex4(180);

function ex4(n) {
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
  console.log("ước số của n là số: ", uocSo);
  console.log("số lượng ước số của n là: ", countUocSo, "số");
}

/**bài tập 5: viết chương trình xuất ra số đảo ngược của số nguyên dương n đã nhập vào
 * vd: 1234 => 4321*/
ex5("12345");

function ex5(str) {
  var temp = [];
  for (var i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  console.log("số đảo ngược của số đã nhập là: ", temp);
}

// bài tập 6: tìm x nguyên dương lớn nhất biết 1+2+3+...+x<=100

function findX(arr) {
  var sum = 0;
  var res;
  for (var i = 1; i < 100; i++) {
    sum += i;
    if (sum <= 100) {
      res = i;
    }
  }
  console.log("vậy x cần tìm là: ", res);
}
findX();

// bài tập 7: viết chương trình nhập n, in ra bảng cửu chương tương ứng của n

function bangCuuChuong(n) {
  var times;
  for (var i = 0; i <= 10; i++) {
    times = n * i;
    console.log("", n, "x", i, "=", times);
  }
}
bangCuuChuong(7);

// bài tập 8:  viết chương trình chia bài cho 4 người chơi

cards([
  "4K",
  "KH",
  "5C",
  "KA",
  "QH",
  "KD",
  "2H",
  "10S",
  "AS",
  "7H",
  "9K",
  "10D",
]);

function cards(arr) {
  var player1 = [];
  var player2 = [];
  var player3 = [];
  var player4 = [];
  var temp;

  for (var i = 0; i < arr.length; i++) {
    temp = i % 4;
    switch (temp) {
      case 0: {
        player1.push(arr[i]);
        break;
      }
      case 1: {
        player2.push(arr[i]);
        break;
      }
      case 2: {
        player3.push(arr[i]);
        break;
      }
      case 3: {
        player4.push(arr[i]);
        break;
      }
    }
  }
  console.log(
    "player1 cards:",
    player1,
    "player2 cards:",
    player2,
    "player3 cards:",
    player3,
    "player4 cards:",
    player4
  );
}
// bài 9 : tìm số gà số chó theo hệ pt, biết m là số con vật và n là tổng số chân

function findNumberOfDogsAndChickens(m, n) {
  var soCho, soGa, delta, deltaX, deltaY;
  delta = 2;
  deltaX = 4 * m - n;
  deltaY = n - 2 * m;

  soCho = deltaY / delta;
  soGa = deltaX / delta;
  // console.log(soGa);
  if (soGa % Math.ceil(soGa) > 0 || soCho % Math.ceil(soCho) > 0) {
    console.log("bài toán vô nghiệm vì số gà và chó không nguyên!");
  } else {
    console.log("số gà là", soGa, "số chó là", soCho);
  }
}

findNumberOfDogsAndChickens(2, 8);

// bài 10: nhập số giờ và số phút, tính góc lệch giữa 2 kim.
function findAngle(a, b) {
  switch (a) {
    case 12:
    case 0: {
      a = 0;
      break;
    }
    case 1:
    case 13: {
      a = 1;
      break;
    }
    case 2:
    case 14: {
      a = 2;
      break;
    }
    case 3:
    case 15: {
      a = 3;
      break;
    }
    case 4:
    case 16: {
      a = 4;
      break;
    }
    case 5:
    case 17: {
      a = 5;
      break;
    }
    case 6:
    case 18: {
      a = 6;
      break;
    }
    case 7:
    case 19: {
      a = 7;
      break;
    }
    case 8:
    case 20: {
      a = 8;
      break;
    }
    case 9:
    case 21: {
      a = 9;
      break;
    }
    case 10:
    case 22: {
      a = 10;
      break;
    }

    case 11:
    case 23: {
      a = 11;
      break;
    }
  }
  var gocLechKimGio, gocLechKimPhut, gocChayKimGioMoiPhut, gocGio, res;
  gocLechKimGio = a * 30;
  // vì mỗi 1 giờ ứng với 30 độ so với trục y
  gocLechKimPhut = b * 6;
  // vì mỗi một phút ứng với 6 độ so với trục y
  gocChayKimGioMoiPhut = b * 0.5;
  // vì mỗi phút qua đi, kim giờ lệch thêm 0.5 độ
  gocGio = gocChayKimGioMoiPhut + gocLechKimGio;
  res = gocLechKimPhut - gocGio;
  if (res === 0) {
    console.log("kim giờ và kim phút tạo thành góc 0 độ");
    return;
  }
  if (res > 0) {
    console.log("kim giờ và phút tạo thành một góc: ", res, "độ");
  }
  if (res < 0) {
    console.log("kim giờ và phút tạo thành một góc: ", -res, "độ");
  }
}

findAngle(9,55);
