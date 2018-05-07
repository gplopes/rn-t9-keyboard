import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

import { MAP_KEY, KEY_SEPARATOR } from "./t9/t9.mapKey";
import { getLetterPos } from "./t9/t9.helpers";
import { getEncode, getDecode } from "./t9/t9";

import { fetchPredictWords } from "./api/api";

import Predict from "./app/Predict/Predict";
import TextArea from "./app/Textarea/Textarea";
import Keyboard from "./app/Keyboard/Keyboard";


export default class App extends PureComponent {
  static defaultProps = {
    delayClick: 1000
  };
  state = {
    typedKeys: "",
    lastClick: null,
    decodedKeys: "",
    predictWords: []
  };

  // Get Predict Words
  async requestPredictWords(nextSetOfKeys) {
    const searchForWord = nextSetOfKeys.split("0").pop();
    const words = await fetchPredictWords(searchForWord);
    this.setState({ predictWords: words});
  }
  requestDecodeWords = nextSetOfKeys => {
    this.requestPredictWords(nextSetOfKeys);
    getDecode(nextSetOfKeys).then(result => {
      this.setState({
        lastClick: new Date(),
        decodedKeys: result,
        typedKeys: nextSetOfKeys,
      });
    });
  };
  // Delete Last Word
  deleteLastWord = () => {
    const { typedKeys, decodedKeys } = this.state;
    const lastKey = typedKeys.slice(-1);

    // Delete Backspace
    // scape delimiter to no break the app (secure)
    if (lastKey == "0" || lastKey == "|") {
      this.requestDecodeWords(typedKeys.slice(0, -1));
      return false;
    }

    // With keys
    const lastLetter = decodedKeys.slice(-1);
    const pos = getLetterPos(lastKey, lastLetter);

    let wordKey = typedKeys.slice(0, -Math.abs(pos));

    // Double check if there is SEPARATOR
    const hasSeparator = wordKey.substr(-1);
    if (hasSeparator === KEY_SEPARATOR) {
      wordKey = wordKey.slice(0, -1);
    }

    this.requestDecodeWords(wordKey);
  };

  // Clear Both TextAreas
  clearKeys = () => {
    this.setState({
      typedKeys: "",
      decodedKeys: ""
    });
  };
  trackNextLetter = nextKey => {
    const { lastClick, typedKeys } = this.state;
    const { delayClick } = this.props;
    const lastKey = typedKeys.slice(-1);

    // Track Click Event in case
    // the user wants user letter on
    // the same KEY NUMBER
    if (lastClick !== null) {
      const currentClick = new Date();
      const gapBetweenClicks = new Date(lastClick.getTime() + delayClick);
      if (currentClick > gapBetweenClicks && lastKey === nextKey) {
        return KEY_SEPARATOR + nextKey;
      }
    }
    return nextKey;
  };

  // Allow User to loop the key
  // when it misses the letter.
  loop = nextKey => {
    const { typedKeys } = this.state;
    const nextSetOfKeys = typedKeys + nextKey;
    const keyObject = MAP_KEY.find(key => key.number == nextKey);

    // Checker: if the key exists
    if (keyObject === undefined) return nextSetOfKeys;

    // Variables
    const keyLength = keyObject.letters.length;
    const prevKeys = nextSetOfKeys.slice(-Math.abs(keyLength + 1)).split("");
    let updatedKeys = nextSetOfKeys;

    // Set Flag: previous keys match.
    let allSame = false;
    if (prevKeys.length > keyLength) {
      allSame = !!prevKeys.reduce((a, b) => (a === b ? a : false));
    }

    // Restart (Init the loop)
    if (allSame) {
      updatedKeys = nextSetOfKeys.slice(0, -Math.abs(prevKeys.length));
    }
    return updatedKeys;
  };

  // Main Handle
  handleKeyboard = key => {
    const { typedKeys } = this.state;
    let nextKey = key.toString();

    // Delete Word
    if (nextKey === "#") {
      this.deleteLastWord();
      return false;
    }

    // Clear Key
    if (nextKey === "*") {
      this.clearKeys();
      return false;
    }

    // Should Loop Again
    const updatedKeys = this.trackNextLetter(nextKey);
    const nextSetOfKeys = this.loop(updatedKeys);

    // Request Decode;
    this.requestDecodeWords(nextSetOfKeys);
  };

  // Handle Predict Click
  handlePredictPress = item => {
    const { typedKeys } = this.state;
    const wordKeys = getEncode(item);
    const wordsList = typedKeys.split("0");

    wordsList[wordsList.length - 1] = wordKeys;
    const nextTypedKeys = wordsList.join("0") + "0";
    this.requestDecodeWords(nextTypedKeys);
  };
  render() {
    const { typedKeys, decodedKeys, predictWords } = this.state;
    return (
      <View style={styles.container}>
        <TextArea encode={typedKeys} decode={decodedKeys} />
        <Predict words={predictWords} onPress={this.handlePredictPress} />
        <Keyboard keys={MAP_KEY} onPress={this.handleKeyboard} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
