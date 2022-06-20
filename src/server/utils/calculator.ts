export type Operator = "+" | "-" | "*" | "/";

export const calculateResult = (operator: Operator, x: number, y: number): number => {
  let result = 0;

  switch(operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
  }

  return result;
}
