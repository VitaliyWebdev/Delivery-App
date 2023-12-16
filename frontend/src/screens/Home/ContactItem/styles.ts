import { colors } from "@src/constants/globalsStyles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contactWrapper: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  img: { position: "absolute" },
  contactIconWithLabelWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contactIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.lightGrey,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  contactIconLabel: { color: "#000" },
  phoneWrapper: { alignSelf: "flex-end" },
});

export default styles;
