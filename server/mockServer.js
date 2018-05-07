import flatten from "lodash/flatten";

const KEY_MAPS = [
  { number: 1, letters: [".", ",", "!", "?"] },
  { number: 2, letters: ["a", "b", "c"] },
  { number: 3, letters: ["d", "e", "f"] },
  { number: 4, letters: ["g", "h", "i"] },
  { number: 5, letters: ["j", "k", "l"] },
  { number: 6, letters: ["m", "n", "o"] },
  { number: 7, letters: ["p", "q", "r", "s"] },
  { number: 8, letters: ["t", "u", "v"] },
  { number: 9, letters: ["w", "x", "y", "z"] },
  { number: "*", letters: ["Clean"] },
  { number: 0, letters: ["[Space]"] },
  { number: "#", letters: ["Delete"] }
];

const KEY_SEPARATOR = "|";

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


// Default (Main)
const decode = function(string) {
  const encodeWords = splitByWords(string);
  const keyLetters = splitByLetters(encodeWords);
  const words = keyToAlphabet(keyLetters);
  const phrase = concatWords(words);

  return Promise.resolve(phrase);
}

const keys = function() {
  return Promise.resolve(KEY_MAPS);
}

export default {
  decode,
  keys
}
