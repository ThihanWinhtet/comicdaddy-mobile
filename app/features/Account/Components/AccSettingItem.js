import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AccSettingItem = ({ icon, text, link }) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.title}>
        <MaterialCommunityIcons color={"white"} name={icon} size={15} />
        <Text style={{ color: "white", marginLeft: 15 }}>{text}</Text>
      </View>
      <MaterialCommunityIcons color={"white"} name="chevron-right" size={18} />
    </View>
  );
};

export default AccSettingItem;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
  },
});
