import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = (props) => {
  return (
    <View style={styles.bottomWrapper}>
      <View style={styles.card}>{props.children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  bottomWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: "#f1f1f1ff",
    padding: 20,
    margin: 15,
    borderRadius: 15,
  },
});
