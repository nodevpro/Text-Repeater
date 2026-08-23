let text = document.getElementById("text");
  
let num = document.getElementById("num");
  
let output = document.getElementById("outputSection");
  
let resultText = document.getElementById("result");

function generate() {
  
  if (text.value == "" || num.value == "") {
      return alert("Please Enter Full Details")
  }
  
  let result = "";
  for (i = 0; i < num.value; i++) {
      result += text.value + "\n";
  }
  
  resultText.innerText = result;
  output.style.display = "block";
  
}

function copy() {
navigator.clipboard.writeText(resultText.innerText);
   alert("Copied! ✅");
}

function reset() {
    output.style.display = "none";
    resultText.innerText = "";
    text.value = "";
    num.value = "";
}