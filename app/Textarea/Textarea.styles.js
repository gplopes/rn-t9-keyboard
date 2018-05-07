import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  },
  text: {
    fontSize: 27
  },
  focusLetter: {
    backgroundColor: "#dfe4ea"
  }
});
