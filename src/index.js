module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    const isOpening = bracketsConfig.map(subArray => subArray[0]).includes(bracket);
    if (isOpening) {
      stack.push(bracket);
    } else {
      const closingConfigBrackets = bracketsConfig.map(subArray => subArray[1]);
      const isClosing = closingConfigBrackets.includes(bracket);
      if (!stack.length && isClosing) {
        return false;
      } else if (isClosing) {
        const top = stack[stack.length = 1];
        const indexOfSubArrClosing = closingConfigBrackets.indexOf(bracket);
        if (top === bracketsConfig[indexOfSubArrClosing][0]) {
          stack.pop();
        }
      }
    }
  };
  return stack.length === 0;
}
