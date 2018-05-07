import React, { PureComponent } from "react";
import { View, Text } from "react-native";

import styles from "./Textarea.styles";
import Cursor from "./Textarea.Cursor";

export default class TextArea extends PureComponent {
  render() {
    const { text, style, textStyle } = this.props;
    const focusLetter = text.slice(-1);
    const _text = text.slice(0, -1);
    return (
      <View style={[styles.textarea, style]}>
        <Text style={[styles.text, textStyle]}>
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
