function getABCPattern(bit: string): string {
  const map: {
    [key: number]: string;
  } = {};
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const uniBitArray = [...new Set(bit)];
  for (let i = 0; i < uniBitArray.length; i++) {
    map[uniBitArray[i]] = letters[i];
  }
  const patternArray: string[] = [];
  [...bit].forEach((i) => patternArray.push(map[i]));
  return patternArray.join("");
}

function getPrefix0Nums(bit: string): number {
  let num = 0;
  [...bit].some((item) => {
    if (item === "0") {
      num++;
    } else {
      return true;
    }
  });
  return num;
}

function repeatLetter(letter, repeatNums) {
  let res = "";
  for (let i = 0; i < repeatNums; i++) {
    res += letter;
  }
  return res;
}

export { getABCPattern, getPrefix0Nums, repeatLetter };
