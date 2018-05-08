import WORD_LIST from "./1000words";

var map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

const getWordsByLetters = (key, index, wordLength) => {
  const matches = [];

  for (var letter in map[key]) {
    for (var word in WORD_LIST) {
      if (
        wordLength == WORD_LIST[word].length &&
        map[key][letter] == WORD_LIST[word][index]
      ) {
        matches.push(WORD_LIST[word]);
      }
    }
  }
  return matches;
};

export const getWordsByNumber = number => {
  let list = [];
  const keyList = number.toString().split("");
  const wordLength = keyList.length;

  // Search Words
  for (let i = 0; i < keyList.length; i++) {
    if (keyList[i] <= 1) return [];
    list = getWordsByLetters(keyList[i], i, wordLength);
  }

  return list;
};
