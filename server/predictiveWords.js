import WORD_LIST from "./1000words";

var keyMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

export const getWordsByLetters = ({ key, index, wordLength }) => {
  const matches = [];
  for (let letter of keyMap[key]) {
    WORD_LIST.forEach(word => {
      if (wordLength === word.length && letter === word[index]) {
        matches.push(word);
      }
    });
  }
  return matches;
};

export const getWordsByNumber = number => {
  const reqNumber = number.toString().split("");
  const wordLength = reqNumber.length;
  let suggestionsResponse = [];

  reqNumber.forEach((key, index) => {
    if (!Number.isInteger(Number(key)) || key <= 1) return [];
    suggestionsResponse = getWordsByLetters({ key, index, wordLength });
  });

  return [...suggestionsResponse];
};
