let expression = '';

function appendNumber(number) {
  expression += number;
  updateResult();
}

function appendOperator(operator) {
  expression += operator;
  updateResult();
}

function appendDecimal() {
  expression += '.';
  updateResult();
}

function deleteLastCharacter() {
  expression = expression.slice(0, -1);
  updateResult();
}

function clearResult() {
  expression = '';
  updateResult();
}

function calculateResult() {
  let result;
  try {
    result = eval(expression);
    if (Number.isFinite(result)) {
      expression = result.toString();
    } else {
      expression = '';
      result = 'Error';
    }
  } catch (error) {
    expression = '';
    result = 'Error';
  }
  updateResult(result);
}

function updateResult(value = expression) {
  document.getElementById('result').value = value;
}
