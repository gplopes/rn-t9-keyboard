import React, { PureComponent } from "react";
import { Animated, Text } from "react-native";

import styles from "./Keyboard.styles";

export default class Cursor extends PureComponent {
  blink = new Animated.Value(1);
  startAnim = () => {
    Animated.loop(
      Animated.spring(this.blink, { toValue: 0.5, duration: 800 })
    ).start();
  };
  componentDidMount() {
    this.startAnim();
  }
  render() {
    return (
      <Animated.Text
        style={[styles.text, styles.focusLetter, { opacity: this.blink }]}
      >
        {this.props.children}
      </Animated.Text>
    );
  }
}
