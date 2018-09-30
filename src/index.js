module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    const closingConfigBrackets = bracketsConfig.map(subArray => subArray[1]);
    const isOpening = bracketsConfig.map(subArray => subArray[0]).includes(bracket);
    const isClosing = closingConfigBrackets.includes(bracket);
    if (stack.length) {
      if (isClosing) {
        const top = stack[stack.length - 1];
        const indexOfSubArrClosing = closingConfigBrackets.indexOf(bracket);
        if (top === bracketsConfig[indexOfSubArrClosing][0]) {
          stack.pop();
        } else if (isOpening) {
          stack.push(bracket);
        }
      } else if (isOpening) {
        stack.push(bracket);
      }
    } else {
      if (isOpening) {
        stack.push(bracket);
      } else if (isClosing) {
        return false;
      }
    }
  };
  return !stack.length;
}
