import React, { PureComponent, Fragment } from "react";
import { View, Text, Dimensions } from "react-native";
import { decodeWords } from "../api/api";

import Key from "./Keyboard.Key";
import TextArea from "./Keyboard.TextArea";

import styles from "./Keyboard.styles";


const WINDOW_WIDTH = Dimensions.get("window").width;
const KEY_SEPARATOR = "|";

export default class Keyboard extends PureComponent {
  state = {
    typedKeys: "",
    lastClick: null,
    encodedKeys: ""
  };
  // Helpers,
  // Get Number of Keys used to write the
  // last word
  findLetterPosition = (number, letter) => {
    const { keys } = this.props;
    const currentKey = keys.find(key => key.number === Number(number));
    const letterPos = currentKey.letters.findIndex(el => el === letter);

    console.log("currentKey", currentKey);
    return letterPos;
  };
  //
  requestApi = nextSetOfKeys => {
    decodeWords(nextSetOfKeys).then(result => {
      this.setState({
        lastClick: new Date(),
        encodedKeys: result,
        typedKeys: nextSetOfKeys
      });
    });
  };
  // Delete Last Key (Only Encoded)
  deleteLastWord = () => {
    const { typedKeys, encodedKeys } = this.state;
    // @TODO DELETE -> |
    const lastKey = typedKeys.slice(-1);

    // Delete Backspace
    if (lastKey == "0") {
      this.requestApi(typedKeys.slice(0,-1));
      return false;
    }
    const lastLetter = encodedKeys.slice(-1);
    const pos = this.findLetterPosition(lastKey, lastLetter) + 1;
    this.requestApi(typedKeys.slice(0, -Math.abs(pos)));
  };

  // Clear Both TextAreas
  clearKeys = () => {
    this.setState({
      typedKeys: "",
      encodedKeys: ""
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
    const { keys } = this.props;
    const nextSetOfKeys = typedKeys + nextKey;
    const keyObject = keys.find(key => key.number == nextKey);

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
    this.requestApi(nextSetOfKeys);
  };
  renderKey = itemProps => {
    const { keyPerLine } = this.props;
    const keyWidth = WINDOW_WIDTH / keyPerLine;
    return (
      <Key
        onPress={this.handleKeyboard}
        style={{ width: keyWidth }}
        key={itemProps.number}
        {...itemProps}
      />
    );
  };
  render() {
    const { keys } = this.props;
    const { typedKeys, encodedKeys } = this.state;
    return (
      <Fragment>
        <TextArea text={encodedKeys} />
        <TextArea text={typedKeys} />
        <View style={styles.keyboard}>{keys.map(this.renderKey)}</View>
      </Fragment>
    );
  }
}

Keyboard.defaultProps = {
  keys: [],
  keyPerLine: 3,
  delayClick: 1000
};
