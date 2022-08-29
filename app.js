let firstNumber = "";
let secondNumber = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "(", ")"];
const action = ["-", "+", "*", "/", "%"];

//screen

const outScreen = document.querySelector(".calc_screen p");

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  sign = "";
  finish = false;
  outScreen.textContent = 0;
}


function pi() {
  outScreen.textContent = Math.PI;
  
  console.log(Math.PI);
}

document.querySelector(".ac").onclick = clearAll;
document.querySelector(".pi").onclick = pi;

document.querySelector(".buttons").onclick = (event) => {
  //no click button
  if (!event.target.classList.contains("btn")) return;

  //click button
  if (event.target.classList.contains("ac")) return;
  if (event.target.classList.contains("pi")) return;

  outScreen.textContent = "";

  //yes click button
  const key = event.target.textContent;

  //if click btn 0-9 and .
  if (digit.includes(key)) {
    if (secondNumber === "" && sign === "") {
      firstNumber += key;
      outScreen.textContent = firstNumber;
    } else if (firstNumber !== "" && secondNumber !== "" && finish) {
      secondNumber = key;
      finish = false;
      outScreen.textContent = secondNumber;
    } else {
      secondNumber += key;
      outScreen.textContent = secondNumber;
    }

    console.log(firstNumber, secondNumber, sign);
    return;
  }

  //if click btn + - * /
  if (action.includes(key)) {
    sign = key;
    outScreen.textContent = sign;
    console.log(firstNumber, secondNumber, sign);
    return;
  }

  //if click =
  if (key === "=") {
    if (secondNumber === "") secondNumber = firstNumber;
    switch (sign) {
      case "+":
        firstNumber = +firstNumber + +secondNumber;
        break;
      case "-":
        firstNumber = firstNumber - secondNumber;
        break;
      case "%":
        firstNumber = (firstNumber / secondNumber) * 100;
        break;
      case "*":
        firstNumber = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === "0") {
          outScreen.textContent = "Error";
          firstNumber = "";
          secondNumber = "";
          sign = "";
          return;
        }
        firstNumber = firstNumber / secondNumber;
        break;
    }
    finish = true;
    outScreen.textContent = firstNumber;
    console.log(firstNumber, secondNumber, sign);
  }
};
