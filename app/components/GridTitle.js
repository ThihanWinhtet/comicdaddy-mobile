import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GridTitle = ({ title, link , type}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.link} onPress={() => navigation.navigate(link, {type})}>
        <Text style={{ fontSize: 12 }}>See More </Text>
        <MaterialCommunityIcons name="chevron-right" size={15} />
      </Pressable>
    </View>
  );
};

export default GridTitle;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
  },
});
