import { getWordsByLetters, getWordsByNumber } from "./predictiveWords";

describe("server @ getWordsByLetters()", () => {
  it("should return suggestion words", () => {
    const suggestions = getWordsByLetters({ key: 8, index: 0, wordLength: 2 });
    const expectEqual = ["to", "up", "us"];
    expect(suggestions).toEqual(expectEqual);
  });
});

describe("server @ getWordsByNumber()", () => {
  it("should return suggestions words list", () => {
    const suggestions = getWordsByNumber("87");
    const expectEqual = ["up", "or", "is", "as", "us"];
    expect(suggestions).toEqual(expectEqual);
  });

  it("should return 'testing' as one of the suggestions", () => {
    const suggestions = getWordsByNumber("8378464");
    expect(suggestions).toContain("testing");
  });

  it("should return 'super' as one of the suggestions", () => {
    const suggestions = getWordsByNumber("78737");
    expect(suggestions).toContain("super");
  });

  it("should return empty array if request is not number", () => {
    const suggestions = getWordsByNumber("A|*&@_-");
    expect(suggestions).toEqual([]);
  });
});
