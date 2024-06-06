/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
    return this;
  }

  subtract(number) {
    this.result -= number;
    return this;
  }

  multiply(number) {
    this.result *= number;
    return this;
  }

  divide(number) {
    if (number === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= number;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // Remove all spaces from the expression
    const sanitizedExpression = expression.split(' ').join('');

    // Check if the expression contains only valid characters
    const validCharacters = /^[0-9+\-*/().]*$/;
    if (!validCharacters.test(sanitizedExpression)) {
      throw new Error('Invalid characters in expression');
    }

    try {
      // Evaluate the expression and update the result
      this.result = this._evaluateExpression(sanitizedExpression);
      return this;
    } catch (e) {
      throw new Error('Invalid expression');
    }
  }

  _evaluateExpression(expression) {
    // Helper function to evaluate the expression using Function constructor
    // This is generally unsafe, so in a real-world application, consider using a proper math expression parser
    return new Function('return ' + expression)();
  }
}

// Example usage:
const calc = new Calculator();
calc.add(5).subtract(2).multiply(3).divide(1.5);
console.log(calc.getResult());
calc.clear();
console.log(calc.getResult());
calc.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
console.log(calc.getResult());