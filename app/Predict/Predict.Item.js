import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./Predict.styles";

export default ({ children, onPress }) => {
  const handlePress = () => onPress && onPress(children);
  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <Text style={styles.itemText}>{children}</Text>
    </TouchableOpacity>
  );
};
