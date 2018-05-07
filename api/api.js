import { getWordsByNumber } from "../server/predictiveWords";

export const fetchPredictWords = (keys) => Promise.resolve(getWordsByNumber(keys));