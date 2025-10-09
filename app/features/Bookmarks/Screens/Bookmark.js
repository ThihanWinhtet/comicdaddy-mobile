import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../../components/screen";
import Search from "../../../components/Search";
import ListGrid from "../../../components/ListGrid";
import ComicItem from "../../comics/Components/ComicItem";
import { useBookmarks } from "../hook";
import { useNavigation } from "@react-navigation/native";

const Bookmark = () => {
  const navigation = useNavigation();
  const { comics } = useBookmarks();

  return (
    <Screen>
      <Search value={""} onChange={"setSearch"} onClear={() => setSearch("")} />
      <ListGrid
        link={"SearchScreen"}
        comics={comics}
        scrollable={true}
        renderItem={({ item, itemWidth, height, marginSize }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("ComicDetails", {
                item,
                key: item._id,
                screen: "Details",
              })
            }
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
          </Pressable>
        )}
      />
    </Screen>
  );
};

export default Bookmark;

const styles = StyleSheet.create({});
