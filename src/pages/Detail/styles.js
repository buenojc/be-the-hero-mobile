import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
  },

  incidentHeader: {
    flexDirection: "row",
    marginBottom: 15,
  },

  incidentOngName: {
    marginRight: 50,
  },

  incidentFieldTitle: {
    textTransform: "uppercase",
    fontSize: 14,
    color: "#41414d",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  incidentFieldValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },

  helpTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  helpDescription: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    marginTop: 20,
    color: "#737380",
  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "#e02041",
    width: "47%",
    paddingVertical: 15,
    borderRadius: 10,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});
