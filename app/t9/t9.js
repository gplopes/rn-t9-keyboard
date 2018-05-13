import flatten from "lodash/flatten";
import { MAP_KEY, KEY_SEPARATOR } from "./t9.mapKey";

// Helper
export function getMapKey(number) {
  return MAP_KEY.find(key => key.number === Number(number));
}

// Split By Words (by backspace)
export function splitByWords(string) {
  return string.split("0");
}

// Split By Letters with Separator;
export function splitBySeparator(words) {
  if (typeof words === "string") return words.split(KEY_SEPARATOR);
  return words.map(word => word.split(KEY_SEPARATOR));
}

// Split the letters (numbers)
const _getSplitNumbers = stringNumber =>
  stringNumber.split(/(\9+|8+|7+|6+|5+|4+|3+|2+|1+|0+)/g).filter(q => q);

export function splitByLetters(words) {
  if (typeof words === "string") return _getSplitNumbers(words);

  const wordsArray = splitBySeparator(words);
  return wordsArray.map(group => {
    const counter = group.map(_getSplitNumbers);
    return flatten(counter);
  });

  return wordsArray;
}

// Convert Key to Alphabet
const getKeyConverted = letter => {
  const mapKey = getMapKey(letter[0]);
  const letterPos = letter.length;
  const letterAlphabet = mapKey.letters[letterPos - 1];
  return letterAlphabet;
};

export function keyToAlphabet(encodeWords) {
  if (typeof encodeWords === "string") {
    return encodeWords.split("").map(getKeyConverted);
  }
  return encodeWords.map(word => {
    return word.map(getKeyConverted);
  });
}

// Concat the words
export function concatWords(words) {
  const joinedWords = words.map(word => word.join(""));
  return joinedWords.join(" ");
}

////

export const findLetterPosition = letter => {
  const currentKey = MAP_KEY.find(key => {
    return key.letters.find(q => q === letter);
  });
  const letterPos = currentKey.letters.findIndex(el => el === letter);
  const encode = new Array(letterPos + 1).fill(currentKey.number);

  // Add Delimiter
  encode.map((item, index) => {
    if (index + 1 === currentKey.letters.length) {
      encode.splice(index + 1, 0, "|");
    }
  });
  return encode.join("");
};

// Encode Words
export const getEncode = function(word) {
  const letters = word.split("");
  const result = letters.map(findLetterPosition).join("");
  return result;
};

// Decode Keys
export const getDecode = function(string) {
  const encodeWords = splitByWords(string);
  const keyLetters = splitByLetters(encodeWords);
  const words = keyToAlphabet(keyLetters);
  const phrase = concatWords(words);

  return Promise.resolve(phrase);
};

export default {
  getDecode,
  getEncode
};
