import { StyleSheet, Text, View } from "react-native";

const FormTitle = ({ title, subTitle }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      {subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : ""}
    </View>
  );
};

export default FormTitle;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginBottom : 25
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subTitle: {
    // width: "80%",
    fontSize: 13,
    margin: 20,
    textAlign: "center",
    color: "#6d6d6dff",
    marginVertical: 5,
  },
});
