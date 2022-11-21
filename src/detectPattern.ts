import { Patterns, DetectFunction } from "./types";
import { _10K, _100K, _00XX, _0x10K } from "./constants";
import patternsStrategys from "./patternsStrategy";
const { detectDigitPattern, detectLetterPattern, detectDigitalStartwith0x } =
  patternsStrategys;

const RegDigit = /^\d+$/;
const RegLetter = /^[a-zA-Z]+$/;
const RegStartWith0xDigit = /^0x\d+$/;

const RegToStrategys: [RegExp, DetectFunction][] = [
  [RegDigit, detectDigitPattern], // Common Digital patterns
  [RegLetter, detectLetterPattern], //   All letter patterns
  [RegStartWith0xDigit, detectDigitalStartwith0x], // Digital start with 0x
];

function detectPattern(input: string = ""): string {
  const bit = input.replace(/\.bit$/, "");
  let patterns: Patterns = [];
  RegToStrategys.forEach(([reg, strategy]) => {
    if (reg.test(bit)) {
      patterns = [...patterns, ...strategy(bit)];
    }
  });
  return patterns.toString();
}

export default detectPattern;
