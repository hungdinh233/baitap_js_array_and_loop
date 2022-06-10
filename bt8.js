var array = [];
function themVaoMang() {
  var nhapSo = document.getElementById("input").value;
  if (nhapSo == "") {
    alert("nhập lá bài vào bạn ơi!");
    return;
  } else {
    array.push(nhapSo);
    
    document.getElementById("show__array").innerHTML = array;
  }
}

function cards() {
    var player1 = [];
    var player2 = [];
    var player3 = [];
    var player4 = [];
    var temp;
  
    for (var i = 0; i < array.length; i++) {
      temp = i % 4;
      switch (temp) {
        case 0: {
          player1.push(array[i]);
          break;
        }
        case 1: {
          player2.push(array[i]);
          break;
        }
        case 2: {
          player3.push(array[i]);
          break;
        }
        case 3: {
          player4.push(array[i]);
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
    document.getElementById("result1").innerHTML = player1;
    document.getElementById("result2").innerHTML = player2;
    document.getElementById("result3").innerHTML = player3;
    document.getElementById("result4").innerHTML = player4;
  }