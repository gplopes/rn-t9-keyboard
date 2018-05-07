import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fetchKeys } from "./app/api/api";
import Keyboard from "./app/Keyboard/Keyboard";

export default class App extends React.Component {
  state = { keys: [] };
  async componentDidMount() {
    const keys = await fetchKeys();
    this.setState({ keys });
  }
  render() {
    return (
      <View style={styles.container}>
        <Keyboard keys={this.state.keys} />
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
