//первое мы получаем все константы по id тегам что бы мы могли с ними взаимодействовать
const resultElem = document.getElementById("result");
const submit = document.getElementById("submit");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
function printResult(result) {
  if (result > 0) {
    resultElem.style.color = "green"; //в данной функции мы прописали то что бы если сумма резкльтата
    // была больше чем 0 цвет рузультата был зеленый если нет то красный
  } else if (result < 0) {
    resultElem.style.color = "red";
  } else if (result == 0) {
    resultElem.style.color = "black";
  }
  resultElem.textContent = result;
}

function resultNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  /*if (actionSymbol == "+") {
    return num1 + num2; // тут мы возвращаем результат в функцию если символ такой то
    // то возратит - булдет хранить такое то действие
  }
  if (actionSymbol == "-") {
    return num1 - num2;
  } */
  // но проще все переписать с помощью тернарного оператора ?
  return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

submit.onclick = function () {
  const result = resultNumbersWithAction(input1, input2, action);
  printResult(result);
  // printColorResult (sumInput) //спросить как работает замена передаваемой переменной ??
};
