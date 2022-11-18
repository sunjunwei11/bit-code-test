import dp from "../src/detectPattern";
import { getABCPattern } from "../src/utils";

test("Detect all digital patterns", () => {
  expect(dp("3.bit")).toBe(String(["A", "1D", "Digit"]));
  expect(dp("33.bit")).toBe(String(["AA", "2D", "Digit"]));
  expect(dp("23.bit")).toBe(String(["AB", "2D", "Digit"]));
  expect(dp("123.bit")).toBe(String(["ABC", "3D", "Digit"]));
  expect(dp("333.bit")).toBe(String(["AAA", "3D", "Digit"]));
  expect(dp("2112.bit")).toBe(String(["ABBA", "10K", "4D", "Digit"]));
  expect(dp("2132.bit")).toBe(String(["ABCA", "10K", "4D", "Digit"]));
  expect(dp("45555.bit")).toBe(String(["ABBBB", "100K", "5D", "Digit"]));
  expect(dp("888000.bit")).toBe(String(["AAABBB", "6D", "Digit"]));
  expect(dp("8880000.bit")).toBe(String(["Digit"]));
});

test("Detect Start With 0 OR 00 OR 000", () => {
  // Start with 0
  expect(dp("098.bit")).toBe(String(["0XX", "3D", "Digit"]));
  expect(dp("0988.bit")).toBe(String(["0XXX", "10K", "4D", "Digit"]));
  expect(dp("09811.bit")).toBe(String(["0XXXX", "100K", "5D", "Digit"]));

  // Start With 00
  expect(dp("0098.bit")).toBe(String(["00XX", "10K", "4D", "Digit"]));
  expect(dp("00988.bit")).toBe(["00XXX", "100K", "5D", "Digit"].toString());
  expect(dp("009811.bit")).toBe(["00XXXX", "6D", "Digit"].toString());

  // Start With 000
  expect(dp("00098.bit")).toBe(String(["000XX", "100K", "5D", "Digit"]));
  expect(dp("000988.bit")).toBe(["000XXX", "6D", "Digit"].toString());
  expect(dp("0009811.bit")).toBe(["Digit"].toString());
});

test("Detect all Letter", () => {
  expect(dp("DDD.bit")).toBe(String(["LetterAAA"]));
  expect(dp("DID.bit")).toBe(String(["LetterABA"]));
  expect(dp("DIDD.bit")).toBe(String(["LetterABAA"]));
  expect(dp("DIDC.bit")).toBe(String(["LetterABAC"]));
  expect(dp("DIDCC.bit")).toBe(String(["LetterABACC"]));
  expect(dp("DIOK.bit")).toBe(String(["LetterABCD"]));
  expect(dp("DIOKDIOK.bit")).toBe(String(["Letter"]));
});

test("Detect digital start with 0x", () => {
  expect(dp("0x9832.bit")).toBe(String(["0x10K", "Digit"]));
  expect(dp("0x98311.bit")).toBe(String(["0x100K", "Digit"]));
  expect(dp("0x983.bit")).toBe(String(["0x3D", "Digit"]));
  expect(dp("0x98.bit")).toBe(String(["0x2D", "Digit"]));
  expect(dp("0x9.bit")).toBe(String(["0x1D", "Digit"]));
});

test("getABCPattern function test", () => {
  expect(getABCPattern("112233")).toBe("AABBCC");
  expect(getABCPattern("122231")).toBe("ABBBCA");
  expect(getABCPattern("1113")).toBe("AAAB");
  expect(getABCPattern("2218")).toBe("AABC");
  expect(getABCPattern("133311")).toBe("ABBBAA");
});
