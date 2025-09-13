import { StyleSheet, FlatList, Dimensions, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComicItem from "./ComicItem";

const numColumns = 3;
const screenWidth = Dimensions.get("window").width;
const marginSize = 8;
const itemWidth = screenWidth / numColumns - marginSize * 2.4;
const height = (itemWidth * 3) / 2;

const ComicGrid = ({ title, comics, scrollable = false }) => {
  const navigation = useNavigation();

  return (
    <>
      {title ? (
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.link}>
            <Text style={{ fontSize: 12 }}>See More </Text>
            <MaterialCommunityIcons name="chevron-right" size={15} />
          </View>
        </View>
      ) : (
        ""
      )}

      <View style={styles.comicGrid}>
        <FlatList
          data={comics}
          numColumns={numColumns}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          scrollEnabled={scrollable}
          keyboardShouldPersistTaps="handled"
          bounces={true}
          // ListHeaderComponent={<Banner />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("ComicDetails", { item })}
            >
              <ComicItem
                image={item.coverImgUrl}
                title={item.title}
                issuesCount={item.issuesCount}
                createdAt={item.createdAt}
                itemWidth={itemWidth}
                height={height}
                marginSize={marginSize}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};
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
  comicGrid: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default ComicGrid;
