import { Pressable, StyleSheet } from "react-native";
import ListGrid from "../../../components/ListGrid";
import Search from "../../../components/Search";
import { useRelatedComic, usePopularComics, useComics } from "../hooks";
import ComicItem from "../Components/ComicItem";
import Screen from "../../../components/screen";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const ComicScreen = ({ route }) => {
  const { type } = route.params;
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const { comics, loading } = useComics(12, search);
  // const { comics, loading } = type == "popular" ? usePopularComics() : useRelatedComic(9);

  return (
    <Screen styles={styles.container}>
      <Search
        value={search}
        onChange={setSearch}
        onClear={() => setSearch("")}
      />
      <ListGrid
        comics={comics}
        scrollable={true}
        contentContainerStyle={styles.listComponent}
        renderItem={({ item, itemWidth, height, marginSize }) => (
          <Pressable
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
          </Pressable>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listComponent: {
    paddingBottom: 130,
  },
});

export default ComicScreen;
