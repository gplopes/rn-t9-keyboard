import { MAP_KEY } from "./t9.mapKey";


  // Helpers,
  // Get Number of Keys used to write the last word
export const getLetterPos = (number, letter) => {
  const currentKey = MAP_KEY.find(key => key.number === Number(number));
  const letterPos = currentKey.letters.findIndex(el => el === letter);
  return letterPos + 1;
};