//pin generated left display
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  if ((pin + "").length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
//pin set left display
function generatePin() {
  document.getElementById("display-pin").value = getPin();
}
//pin set right display
document.getElementById("key-pad").addEventListener("click", function (event) {
  const key = event.target.innerText;
  const typedKey = document.getElementById("typed-pin");
  const typedNumber = typedKey.value;
  if (isNaN(key)) {
    if (key == "C") {
      typedKey.value = "";
    }
  } else {
    typedKey.value = typedNumber + key;
  }
});
//last element remove
function lastKeyRemove() {
  const typedKey = document.getElementById("typed-pin");
  const typedNumber = typedKey.value;
  const newKey = typedNumber.substring(0, typedNumber.length - 1);
  typedKey.value = newKey;
}
// submit button varify pin
function varifyPin() {
  const generatePin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("typed-pin").value;
  const succeseMessage = document.getElementById("pin-matched");
  const errorMessage = document.getElementById("pin-mismatched");
  if (generatePin != "" && generatePin === typedPin) {
    succeseMessage.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    succeseMessage.style.display = "none";
  }
}
