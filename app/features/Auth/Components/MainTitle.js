import { StyleSheet, Text, View } from "react-native";

const MainTitle = ({ title, subTitle }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default MainTitle;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 50,
    margin: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
