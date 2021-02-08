import { StyleSheet } from "react-native";
import containerStyles from "../../containerStyles";

export default StyleSheet.create({
  article: {
    backgroundColor: "#fff",
    height: "100%",
    padding: 10
  },

  modalContainer: {
    ...containerStyles.modalContainer,
    width: 960,
    backgroundColor: "#fff",
    maxHeight: 800,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    resizeMode: "center",
    height: 260,
    width: 400
  },
  modalButtonContainer: {
    flexDirection: "column"
  },
  modalCloseButton: {
    width: 100,
    alignSelf: "flex-end",
    marginTop: 10
  }
})