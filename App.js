import React from "react";
import { StyleSheet, Text, View } from "react-native";

const keys = [
  { number: 1, letters: [".", ",", "!", "?"] },
  { number: 2, letters: ["a", "b", "c"] },
  { number: 3, letters: ["d", "e", "f"] },
  { number: 4, letters: ["g", "h", "i"] },
  { number: 5, letters: ["j", "k", "l"] },
  { number: 6, letters: ["m", "n", "o"] },
  { number: 7, letters: ["p", "q", "r", "s"] },
  { number: 8, letters: ["t", "u", "v"] },
  { number: 9, letters: ["w", "x", "y", "z"] },
  { number: "*", letters: ["Clean"] },
  { number: 0, letters: ["[Space]"] },
  { number: "#", letters: ["Delete"] }
];

import Keyboard from "./app/Keyboard/Keyboard";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Keyboard keys={keys} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
