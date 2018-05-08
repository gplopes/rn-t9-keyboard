import React from "react";
import { Text } from "react-native";

// Custom Text
export const CText = ({ children, ...restProps }) => (
  <Text
    {...restProps}
    suppressHighlighting
    adjustsFontSizeToFit
    allowFontScaling={false}
    >
    {children}
  </Text>
);
