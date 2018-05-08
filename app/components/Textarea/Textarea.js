import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import TextArea from "./Textarea.Item";

import styles from "./Textarea.styles";

const WrapTextArea = ({ encode, decode }) => (
  <ScrollView style={styles.wrapTextArea}>
    <TextArea text={encode} textStyle={{ fontSize: 16, color: "grey" }} />
    <TextArea text={decode} defaultValue="Start typing..." />
  </ScrollView>
);

WrapTextArea.defaultProps = {
  encode: "",
  decode: "",
};

WrapTextArea.propTypes = {
  encode: PropTypes.string,
  decode: PropTypes.string,
};

export default WrapTextArea;