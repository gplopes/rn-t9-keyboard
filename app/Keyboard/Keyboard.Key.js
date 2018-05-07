import React, { PureComponent, Fragment } from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./Keyboard.styles";

export default class Key extends PureComponent {
  handlePress = () => {
    const { onPress, number } = this.props;
    onPress && onPress(number);
  };
  render() {
    const { number, letters, style } = this.props;
    return (
      <TouchableOpacity style={[styles.key, style]} onPress={this.handlePress}>
        <Fragment>
          <Text style={styles.number}>{number}</Text>
          {letters && (
            <Text style={styles.letter}>{letters.join(" ").toUpperCase()}</Text>
          )}
        </Fragment>
      </TouchableOpacity>
    );
  }
}

Key.defaultProps = {
  number: 0,
  letters: [],
  style: null,
};
