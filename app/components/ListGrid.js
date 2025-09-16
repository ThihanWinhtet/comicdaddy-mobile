import { StyleSheet, FlatList, Dimensions, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import ComicItem from "./ComicItem";
import GridTitle from "./GridTitle";

const ListGrid = ({
  title,
  comics,
  renderItem,
  scrollable = false,
  link,
  contentContainerStyle,
}) => {
  const numColumns = 3;
  const screenWidth = Dimensions.get("window").width;
  const marginSize = 8;
  const itemWidth = screenWidth / numColumns - marginSize * 2.4;
  const height = (itemWidth * 3) / 2;

  const navigation = useNavigation();

  return (
    <>
      {title ? <GridTitle title={title} link={link} /> : ""}

      <View style={styles.comicGrid}>
        <FlatList
          data={comics}
          numColumns={numColumns}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          contentContainerStyle={contentContainerStyle}
          scrollEnabled={scrollable}
          keyboardShouldPersistTaps="handled"
          bounces={true}
          renderItem={({ item }) =>
            renderItem({ item, itemWidth, height, marginSize })
          }
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  comicGrid: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default ListGrid;
