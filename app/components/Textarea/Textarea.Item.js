import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { CText } from "../../shared";
import Cursor from "./Textarea.Cursor";

import styles from "./Textarea.styles";

export default class TextArea extends PureComponent {
  render() {
    const { text, defaultValue, style, textStyle } = this.props;
    const focusLetter = text.slice(-1);
    const textValue = text.length === 0 ? defaultValue : text.slice(0, -1);
    return (
      <View style={[styles.textarea, style]}>
        <CText style={[styles.text, textStyle]}>
          {textValue}
          <Cursor>{focusLetter}</Cursor>
        </CText>
      </View>
    );
  }
}

TextArea.defaultProps = {
  text: "",
  defaultValue: ""
};

TextArea.propTypes = {
  defaultValue: PropTypes.string,
  text: PropTypes.string
};
