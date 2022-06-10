function findAngle() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    if (a=="" || b==""){
        alert("nhập đủ thông tin nhé!")
    }
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
      document.getElementById("result1").innerHTML = "kim giờ và kim phút tạo thành góc 0 độ"
      return;}
    if (res > 0) {
      console.log("kim giờ và phút tạo thành một góc: ", res, "độ");
      document.getElementById("result1").innerHTML = res;
      return;
    }
    if (res < 0) {
      console.log("kim giờ và phút tạo thành một góc: ", -res, "độ");
      document.getElementById("result1").innerHTML = -res;

      return;
    }
  }
  
