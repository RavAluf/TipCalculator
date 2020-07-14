var percent = 15;
var text = document.getElementById("text");
var result = document.getElementById("result");
var ptext = document.getElementById("customN");

function getPercent() {
  var checked = document.querySelector("input[name='radio']:checked");
  var ptext = document.getElementById("customN");

  if (checked.value == 1) {
    ptext.readOnly = true;
    percent = 15;
  } else if (checked.value == 2) {
    ptext.readOnly = true;
    percent = 10;
  } else if (checked.value == 3) {
    ptext.readOnly = true;
    percent = 7;
  } else if (checked.value == 4) {
    ptext.readOnly = false;
  }
}

ptext.addEventListener("input", () => {
  percent = ptext.value;
  writeResult();
});

function writeResult() {
  var n = (percent / 100) * text.value;
  result.innerText = n.toFixed(2) + "₪";
}

document.addEventListener("change", () => {
  getPercent();
  writeResult();
});

text.addEventListener("input", writeResult);

function bgChange() {
  var select = document.getElementById("bgSelect");
  var body = document.getElementById("body");
  var texts = document.getElementsByClassName("texts");
  var result = document.getElementById("result");
  var input = document.getElementsByClassName("textboxs");

  if (select.value === "Light") {
    body.style.background = "lightgreen";
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.color = "black";
    }
    for (var i = 0; i < input.length; i++) {
      input[i].style.background = "rgb(217, 255, 217)";
    }
    result.style.color = "black";
  }
  if (select.value === "Dark") {
    body.style.background = "rgb(48, 48, 48)";
    for (var i = 0; i < texts.length; i++) {
      texts[i].style.color = "white";
    }
    for (var i = 0; i < input.length; i++) {
      input[i].style.background = "white";
    }
    result.style.color = "white";
  }
}
