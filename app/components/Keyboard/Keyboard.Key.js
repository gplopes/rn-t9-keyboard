import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { CText } from "../../shared";

import styles from "./Keyboard.styles";

export default class Key extends PureComponent {
  handlePress = () => {
    const { onPress, number } = this.props;
    onPress && onPress(number);
  };
  render() {
    const { number, letters, style } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.key, style]}
        onPress={this.handlePress}
      >
        <Fragment>
          <CText style={styles.number}>
            {number}
          </CText>
          {letters && (
            <CText style={styles.letter}>{letters.join(" ").toUpperCase()}</CText>
          )}
        </Fragment>
      </TouchableOpacity>
    );
  }
}

Key.defaultProps = {
  number: 0,
  letters: [],
  style: null
};

Key.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  letters: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.object
};
