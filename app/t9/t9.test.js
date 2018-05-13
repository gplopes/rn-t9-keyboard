import { MAP_KEY, KEY_SEPARATOR } from "./t9.mapKey";
import {
  getMapKey,
  splitByWords,
  splitBySeparator,
  splitByLetters,
  keyToAlphabet,
  concatWords,
  findLetterPosition,
  getDecode,
  getEncode,
} from "./t9";

describe("t9 @ getMapKey()", () => {
  it("should key object with number & letters", () => {
    const key = getMapKey(2);
    expect(key).toEqual(MAP_KEY[1]);
  });
});

describe("t9 @ splitByWords()", () => {
  it("should split string numbers and words", () => {
    const words = splitByWords("99966608443377733"); // Yo there;
    const result = ["999666", "8443377733"];
    expect(words).toEqual(result);
  });

  it("should split string numbers and words", () => {
    const words = splitByWords("90101"); // W . .
    const result = ["9", "1", "1"];
    expect(words).toEqual(result);
  });
});

describe("t9 @ splitBySeparator()", () => {
  it("should track the letters using the key number", () => {
    const word = splitBySeparator("44|444"); // Hi
    const result = ["44", "444"];
    expect(word).toEqual(result);
  });
});

describe("t9 @ splitByLetters()", () => {
  it("should split the word by letters", () => {
    const letters = splitByLetters("8443377733"); // there
    const result = ["8", "44", "33", "777", "33"];
    expect(letters).toEqual(result);
  });
});

describe("t9 @ keyToAlphabet()", () => {
  it("should convert key number to letter", () => {
    const key = keyToAlphabet("234"); // ADG
    expect(key).toEqual(["a", "d", "g"]);
  });
});

describe("t9 @ concatWords()", () => {
  it("should return a phrase", () => {
    const words = concatWords([["h", "i"], ["t", "h", "e", "r", "e"]]);
    expect(words).toEqual("hi there");
  });
});

describe("t9 @ findLetterPosition()", () => {
  it("find the letter correspond key number", () => {
    const letter = findLetterPosition("a");
    expect(letter).toEqual("2");
  });
});

describe("t9 @ getDecode()", () => {
  it("should key object with number & letters", () => {
    expect.assertions(1);
    const decoded = getDecode("99966608443377733"); // yo there
    const result = "yo there";

    return decoded.then(data => expect(data).toEqual(result));
  });
});

describe("t9 @ getEncode()", () => {
  it("should return correspond keys for the word", () => {
    const word = getEncode("there");
    expect(word).toEqual("8443377733");
  });
});