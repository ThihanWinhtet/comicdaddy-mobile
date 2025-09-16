import { Pressable, StyleSheet } from "react-native";
import ListGrid from "../../../components/ListGrid";
import Search from "../../../components/Search";
import { useComics } from "../hooks";
import ComicItem from "../Components/ComicItem";
import Screen from "../../../components/screen";

const ComicScreen = () => {
  const { comics, loading } = useComics();
  console.log(comics);
  return (
    <Screen styles={styles.container}>
      <Search />
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
