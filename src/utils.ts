/**
 *
 * @param bit string
 * @returns
 * 121 => ABA
 * 1122 => AABB
 * 13321 => ABBCA
 * TTYY => AABB
 * QWWR => ABBC
 */
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

/**
 *
 * @param letter string
 * @param repeatNums number
 * @returns A string repeat repeatNums times
 */
function repeatLetter(letter, repeatNums) {
  let res = "";
  for (let i = 0; i < repeatNums; i++) {
    res += letter;
  }
  return res;
}

export { getABCPattern, repeatLetter };
