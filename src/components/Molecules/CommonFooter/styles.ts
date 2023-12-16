import { colors } from "@src/constants/globalsStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 40,
    alignItems: "center",
  },
  footerLabel: {
    color: colors.blue,
  },
});

export default styles;
