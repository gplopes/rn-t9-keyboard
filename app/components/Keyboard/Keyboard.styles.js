import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Keyboard
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  // Keys
  key: {
    position: "relative",
    backgroundColor: "#2C3A47",
    borderWidth: 1,
    borderColor: "#222f3e",
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold"
  },
  letter: {
    color: "#7f8fa6",
    fontSize: 15
  },
});
