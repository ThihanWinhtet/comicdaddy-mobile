import { Pressable, StyleSheet } from "react-native";

import { useRelatedComic } from "../hooks";
import ComicItem from "../Components/ComicItem";
import ListGrid from "../../../components/ListGrid";
import { useNavigation } from "@react-navigation/native";

const RelatedComic = ({ comicId }) => {
  const { comics, loading } = useRelatedComic(comicId);
  const navigation = useNavigation();

  return (
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
  );
};

export default RelatedComic;

const styles = StyleSheet.create({});
