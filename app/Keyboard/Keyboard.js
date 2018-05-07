import React, { PureComponent } from "react";
import { View, Dimensions } from "react-native";

import Key from "./Keyboard.Key";
import styles from "./Keyboard.styles";

const WINDOW_WIDTH = Dimensions.get("window").width;

export default class Keyboard extends PureComponent {
  renderKey = itemProps => {
    const { keyPerLine, onPress } = this.props;
    const keyWidth = WINDOW_WIDTH / keyPerLine;
    return (
      <Key
        onPress={onPress}
        style={{ width: keyWidth }}
        key={itemProps.number}
        {...itemProps}
      />
    );
  };
  render() {
    const { keys } = this.props;
    return <View style={styles.keyboard}>{keys.map(this.renderKey)}</View>;
  }
}

Keyboard.defaultProps = {
  keys: [],
  onPress: function() {},
  keyPerLine: 3
};
