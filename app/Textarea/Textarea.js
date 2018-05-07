import React from "react";
import { ScrollView } from "react-native";
import TextArea from "./Textarea.Item";

import styles from "./Textarea.styles";

const WrapTextArea = ({ encode, decode }) => (
  <ScrollView style={styles.wrapTextArea}>
    <TextArea text={encode} textStyle={{ fontSize: 16, color: "grey" }} />
    <TextArea text={decode} />
  </ScrollView>
);

WrapTextArea.defaultProps = {
  encode: [],
  decode: [],
};

export default WrapTextArea;