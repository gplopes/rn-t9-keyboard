import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchKeys } from "./app/api/api";
import Keyboard from "./app/Keyboard/Keyboard";

export default class App extends PureComponent {
  state = { keys: [] };
  async componentDidMount() {
    const keyMap = await fetchKeys();
    this.setState({ keys: keyMap.keys, KEY_SEPARATOR: keyMap.separator });
  }
  render() {
    const { KEY_SEPARATOR, keys } = this.state;
    return (
      <View style={styles.container}>
        <Keyboard keys={keys} KEY_SEPARATOR={KEY_SEPARATOR} />
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
