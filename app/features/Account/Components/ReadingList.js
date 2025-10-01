import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReadingListTitle from "./ReadingListTitle";
import ReadingItem from "./ReadingItem";
import { FlatList } from "react-native-gesture-handler";

const items = [
  {
    id: 1,
    coverImg:
      "https://4kwallpapers.com/images/wallpapers/marvel-logo-dark-3840x2160-22111.jpg",
    title: "Marvel’s Greatest Molark Paka Paka",
  },
  {
    id: 2,
    coverImg:
      "https://wallpaperyourworld.com/cdn/shop/products/RMK11411M_5ce5b342-81b2-4096-9a1b-42cde07edb4a_1200x.jpg?v=1742331901",
    title: "Avengers Age of Aladin",
  },
  {
    id: 3,
    coverImg: "https://images.alphacoders.com/104/1046632.jpg",
    title: "Justice League",
  },
  {
    id: 4,
    coverImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSZZRpp9q8DX8oKWozLFdUMlBxrAJ2itF5Wzc0EXIPmKuPA8bSnOKRamlkiAp-GHmJZs&usqp=CAU",
    title: "Animated Justice League",
  },
];

const ReadingList = () => {
  return (
    <View style={styles.container}>
      <ReadingListTitle />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Pressable>
            <ReadingItem coverImg={item.coverImg} title={item.title} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default ReadingList;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
