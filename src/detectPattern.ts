import { Patterns } from "./types";
import { getABCPattern, getPrefix0Nums, repeatLetter } from "./utils";
import { DIGIT, _10K, _100K, _00XX, _0x10K } from "./constants";

const RegDigit = /^\d+$/;
const RegLetter = /^[a-zA-Z]+$/;

function detectPattern(input: string = ""): string {
  const bit = input.replace(/\.bit$/, "");
  let patterns: Patterns;
  // Common Digital patterns
  if (RegDigit.test(bit)) {
    patterns = detectDigitPattern(bit);
  }
  //   All letter patterns
  else if (RegLetter.test(bit)) {
    patterns = detectLetterPattern(bit);
  }
  // Digital start with 0x
  else if (/^0x\d+$/.test(bit)) {
    patterns = detectDigitalStartwith0x(bit);
  } else {
    patterns = [];
  }
  return patterns.toString();
}

// Common Digital patterns
function detectDigitPattern(bit: string): Patterns {
  const pattern: Patterns = [];
  if (bit.length <= 6) {
    if (/^0{1,3}\d+$/.test(bit)) {
      // get '0X' / '00XX' / '000XX'
      const prefix0Nums = getPrefix0Nums(bit);
      const Xnums = bit.length - prefix0Nums;
      pattern.push(
        `${repeatLetter("0", prefix0Nums)}${repeatLetter("X", Xnums)}`
      );
    } else {
      // get 'AAA' / 'ABBA'
      const ABCPattern = getABCPattern(bit);
      pattern.push(ABCPattern);
    }
  }

  /^\d{4}$/.test(bit) && pattern.push(_10K);
  /^\d{5}$/.test(bit) && pattern.push(_100K);

  bit.length <= 6 && pattern.push(`${bit.length}D`);

  pattern.push(DIGIT);
  return pattern;
}

//   All letter patterns
function detectLetterPattern(bit: string): Patterns {
  const pattern: Patterns = [];
  if (bit.length <= 6) {
    // get 'AAA' / 'ABBA'
    const ABCPattern = getABCPattern(bit);
    pattern.push(`Letter${ABCPattern}`);
  } else {
    pattern.push(`Letter`);
  }
  return pattern;
}

// Digital start with 0x
function detectDigitalStartwith0x(bit: string): Patterns {
  const num = bit.replace(/^0x/, "");
  const pattern: Patterns = [];
  // 0x1D 0x2D 0x3D
  if (num.length <= 3) {
    pattern.push(`0x${num.length}D`);
  } else {
    num.length === 4 && pattern.push(`0x10K`);
    num.length === 5 && pattern.push(`0x100K`);
  }
  pattern.push(DIGIT);
  return pattern;
}

export default detectPattern;
