import { Pressable } from "react-native";
import ListGrid from "../../../components/ListGrid";
import { usePopularComics } from "../hooks";
import ComicItem from "../Components/ComicItem";
import { useNavigation } from "@react-navigation/native";

const PopularComic = () => {
  const { comics, loading } = usePopularComics();
  const navigation = useNavigation();

  return (
    <ListGrid
      title={"Popular Comics For You"}
      link={"SearchScreen"}
      comics={comics}
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
  );
};

export default PopularComic;
