import { colors } from "@src/constants/globalsStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: colors.blue,
    paddingVertical: 17,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonLabel: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: -0.408,
  },
  emailInput: {
    marginBottom: 8,
  },
  passwordInput: {
    marginBottom: 16,
  },
});

export default styles;
