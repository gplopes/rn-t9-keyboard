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
    fontSize: 30,
    fontWeight: "bold"
  },
  letter: {
    color: "#7f8fa6",
    fontSize: 17
  },

  //
  wrapTextArea: {
    flex: 1,
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: "#f1f2f6",
  },
  textarea: {
    flexWrap: "wrap",
    width: "100%",
    minHeight: 50,
    padding: 20,
    //justifyContent: "center"
  },
  title: {
    top: 10,
    left: 10,
    position: "absolute"
  },
  text: {
    fontSize: 27
  },
  focusLetter: {
    backgroundColor: "#dfe4ea"
  }
});
