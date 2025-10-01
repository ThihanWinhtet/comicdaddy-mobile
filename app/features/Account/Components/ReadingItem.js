import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ReadingItem = ({ coverImg, title }) => {
  return (
    <View>
      <Image
        style={styles.coverImg}
        source={{
          uri: coverImg,
        }}
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default ReadingItem;

const styles = StyleSheet.create({
  coverImg: {
    width: 165,
    height: 80,
    borderRadius: 10,
  },
  title: {
    width: 165,
    fontWeight: "600",
    fontSize: 12,
    paddingTop: 8,
  },
});
