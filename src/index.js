 module.exports = function check(str, bracketsConfig) {
  // your solution
  let openBracketsArray = [];
  let pairsBrackets = new Map();
  let symetricBrackets = new Map();
  for (let i = 0; i < bracketsConfig.length; i++){
    openBracketsArray.push(bracketsConfig[i][0]);
    pairsBrackets.set(bracketsConfig[i][1], bracketsConfig[i][0]);
    if (bracketsConfig[i][1] === bracketsConfig[i][0]) {
      symetricBrackets.set(bracketsConfig[i][1], true);
    }
  }

  let stack = [];
  let arrayOfBrackets = str.slice("");
  for (let i=0; i<arrayOfBrackets.length; i++) {
    let currBracket = arrayOfBrackets[i];

    if (openBracketsArray.includes(currBracket)) {
      
      if (symetricBrackets.has(currBracket)){
        if (symetricBrackets.get(currBracket)) {
          symetricBrackets.set(currBracket, false);
          stack.push(currBracket);
          continue;
        }
      }
      else {
        stack.push(currBracket);
        continue;
      }
      
    }

    if (stack.length === 0) {
      return false;
    }
    
    if (symetricBrackets.has(currBracket)){
      symetricBrackets.set(currBracket, true);
    }

    let expBracket = pairsBrackets.get(currBracket);
    let openBracket = stack[stack.length - 1];
    if (expBracket === openBracket) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};
