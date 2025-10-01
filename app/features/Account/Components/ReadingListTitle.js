import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ReadingListTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Continue Reading</Text>
      <View style={styles.titleLink}>
        <Pressable>
          <Feather name="chevron-left" size={15} />
        </Pressable>
        <Pressable>
          <Feather style={{ color: "red" }} name="chevron-right" size={15} />
        </Pressable>
      </View>
    </View>
  );
};

export default ReadingListTitle;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "700",
    fontSize : 15
  },
  titleLink: {
    flexDirection: "row",
  },
});
