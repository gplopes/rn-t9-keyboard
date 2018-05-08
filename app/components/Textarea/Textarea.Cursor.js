import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Animated } from "react-native";

import styles from "./Textarea.styles";

export default class Cursor extends PureComponent {
  colorAnim = new Animated.Value(0);
  startAnim = () => {
    Animated.loop(
      Animated.spring(this.colorAnim, { toValue: 1, duration: 300 })
    ).start();
  };
  componentDidMount() {
    this.startAnim();
  }
  render() {
    const bgColor = this.colorAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["white", "#dfe6e9"]
    });
    return (
      <Animated.Text style={{ backgroundColor: bgColor }}>
        {this.props.children}
      </Animated.Text>
    );
  }
}

Cursor.defaultProps = {
  children: "",
}

Cursor.propTypes = {
  children: PropTypes.string
}