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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 48,
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    color: "#13131a",
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
    marginBottom: 40,
  },

  incidents: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },

  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  detailsButtonText: {
    color: "#e02041",
    fontWeight: "bold",
  },
});
