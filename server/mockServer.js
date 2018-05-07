import flatten from "lodash/flatten";

import { KEY_MAPS, KEY_SEPARATOR } from "./keyMap";

// Helper
function getMapKey(number) {
  return KEY_MAPS.find(key => key.number === Number(number));
}

// Split By Words (by backspace)
function splitByWords(string) {
  return string.split("0");
}

// Split By Letters with Separator;
function splitBySeparator(words) {
  return words.map(word => word.split(KEY_SEPARATOR));
}

function splitByLetters(words) {
  const wordsArray = splitBySeparator(words);
  return wordsArray.map(group => {
    const counter = group.map(eachGroup => {
      return eachGroup
        .split(/(\9+|8+|7+|6+|5+|4+|3+|2+|1+|0+)/g)
        .filter(q => q);
    });
    return flatten(counter);
  });
  return wordsArray;
}

function keyToAlphabet(encodeWords) {
  return encodeWords.map(word => {
    return word.map(letter => {
      const mapKey = getMapKey(letter[0]);
      const letterPos = letter.length;
      const letterAlphabet = mapKey.letters[letterPos - 1];
      return letterAlphabet;
    });
  });
}

function concatWords(words) {
  const joinedWords = words.map(word => word.join(""));
  return joinedWords.join(" ");
}

// Decode Keys
const decode = function(string) {
  const encodeWords = splitByWords(string);
  const keyLetters = splitByLetters(encodeWords);
  const words = keyToAlphabet(keyLetters);
  const phrase = concatWords(words);

  return Promise.resolve(phrase);
};

const keys = function() {
  return Promise.resolve({ keys: KEY_MAPS, separator: KEY_SEPARATOR });
};

export default {
  decode,
  keys
};
