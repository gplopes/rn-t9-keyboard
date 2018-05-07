import React, { PureComponent } from "react";
import { View, Text } from "react-native";

import styles from "./Keyboard.styles";
import Cursor from "./Keyboard.Cursor";

export default class TextArea extends PureComponent {
  render() {
    const { text } = this.props;
    const focusLetter = text.slice(-1);
    const _text = text.slice(0, -1);
    return (
      <View style={styles.textarea}>
        <Text style={styles.text}>
          {_text}
          <Cursor>{focusLetter}</Cursor>
        </Text>
      </View>
    );
  }
}

TextArea.defaultProps = {
  text: ""
};
