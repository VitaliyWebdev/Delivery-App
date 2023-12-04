import { colors } from "@src/constants/globalsStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "red",
  },
  input: {
    backgroundColor: colors.lightGrey,
    paddingLeft: 12,
    flex: 1,
  },
  inputErrorLabel: {
    color: "red",
  },
});

export default styles;
