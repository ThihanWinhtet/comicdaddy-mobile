import { StyleSheet, View } from "react-native";

const Container = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1d1d1ff",
  },
});
