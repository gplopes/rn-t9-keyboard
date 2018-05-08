import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Animated } from "react-native";
import { CText } from "../../shared";

import styles from "./Predict.styles";

class PredictItem extends PureComponent {
  opacityAnim = new Animated.Value(0);
  startAnim = () => {
    Animated.spring(this.opacityAnim, {
      toValue: 1,
      duration: 800,
      delay: this.props.delay * 50
    }).start();
  };
  componentDidMount() {
    this.startAnim();
  }
  render() {
    const { children, onPress } = this.props;
    const handlePress = () => onPress && onPress(children);
    return (
      <Animated.View style={{ opacity: this.opacityAnim }}>
        <TouchableOpacity style={styles.item} onPress={handlePress}>
          <CText style={styles.itemText}>{children}</CText>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

PredictItem.defaultProps = {
  delay: 1
};

PredictItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default PredictItem;
