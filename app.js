// Generating random numbers
function show_random_number() {
  var random_number = Math.floor(Math.random() * 900000 + 100000);
  document.getElementById("rand").innerHTML = random_number;
  document.getElementById("par").innerHTML = "Refreshing the page in 5 seconds";
  localStorage.setItem("myData", random_number);
  setTimeout(function() {
    window.location.href = "guess.html";
  }, 5000);
}

// only allowing interger input
function isNum(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// comparing values
function check() {
  let count = 0;
  var num = document.getElementById("myText").value;
  if (num == "") {
    // when no value is entered
    alert("Enter a number");
    return false;
  }

  var val = [];
  var val = new Array();
  var k = 0;
  val[k] = document.getElementById("myText").value;
  var m = val[k];
  var data = localStorage.getItem("myData");
  for (var i = 0; i < m.length; i++) {
    if (m[i] == data[i]) {
      count++;
    }
  }
  document.getElementById("val").innerHTML = count + " correct guesses";

  k++;
  return true;
}

function redirect() {
  window.location.href = "index.html";
}
