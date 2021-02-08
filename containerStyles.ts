import { Platform, StyleSheet } from "react-native";


export default StyleSheet.create({
  modalContainer: {
    ...Platform.select({
      web: {
        flex: 1,
        maxWidth: 960,
        alignSelf: "center",
        justifyContent: "center"
      }
    }),
  },
  screenCard: {
    ...Platform.select({
      web: {
        backgroundColor: "transparent",
        opacity: 0.99
      }
    }),
  }

})