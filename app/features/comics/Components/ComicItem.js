import { View, Text, Image, StyleSheet } from "react-native";

const ComicItem = ({
  image,
  title,
  issuesCount,
  createdAt,
  itemWidth = 120,
  marginSize,
  height = (itemWidth * 3) / 2,
  ...otherprops
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: itemWidth,
          margin: marginSize,
        },
      ]}
    >
      <Image
        style={[
          styles.image,
          {
            width: itemWidth,
            height: height,
          },
        ]}
        source={{
          uri: image,
        }}
      ></Image>

      <Text style={[styles.title, { width: itemWidth }]} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.subtitle}>
        <Text style={styles.issuesCount}>issues #{issuesCount} </Text>
        <Text style={styles.issuesCount}>
          / ({String(new Date(createdAt).getFullYear())})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 12,
    paddingTop: 8,
    paddingBottom: 5,
  },
  subtitle: {
    flexDirection: "row",
  },
  issuesCount: {
    fontWeight: "200",
    fontSize: 11,
  },
  image: {
    borderRadius: 10,
  },
});

export default ComicItem;
