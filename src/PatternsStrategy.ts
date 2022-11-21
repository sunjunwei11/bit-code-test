import { Patterns } from "./types";
import { getABCPattern, repeatLetter } from "./utils";
import { DIGIT, _10K, _100K, _00XX, _0x10K } from "./constants";

const patternsStrategys = {
  // Common Digital patterns
  detectDigitPattern: detectDigitPattern,
  //   All letter patterns
  detectLetterPattern: detectLetterPattern,
  // Digital start with 0x
  detectDigitalStartwith0x: detectDigitalStartwith0x,
};

// Common Digital patterns
function detectDigitPattern(bit: string): Patterns {
  const pattern: Patterns = [];
  // if the length > 6, we think it is a very common digital, and don't give it a special pattern
  if (bit.length <= 6) {
    const bitMatch = bit.match(/^(0{1,3})([^0]\d+)$/);
    if (bitMatch) {
      const prefix0Nums = bitMatch[1].length;
      const Xnums = bitMatch[2].length;
      pattern.push(
        `${repeatLetter("0", prefix0Nums)}${repeatLetter("X", Xnums)}`
      );
    } else {
      // get 'AAA' / 'ABBA' Pattern
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
    // get 'AAA' / 'ABBA' Pattern
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
  const patternArray = ["0x1D", "0x2D", "0x3D", "0x10K", "0x100K"];
  // 0x1D 0x2D 0x3D
  patternArray[num.length - 1] && pattern.push(patternArray[num.length - 1]);
  pattern.push(DIGIT);
  return pattern;
}

export default patternsStrategys;
