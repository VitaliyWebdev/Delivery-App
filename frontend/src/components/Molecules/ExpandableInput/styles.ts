import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 5,
  },
  expandedContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
  },
  inputContainer: {
    overflow: "hidden",
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});

export default styles;
