import { Pressable } from "react-native";
import ListGrid from "../../../components/ListGrid";
import { useChapters } from "../hooks";
import ComicItem from "../../comics/Components/ComicItem";
import { useNavigation } from "@react-navigation/native";

const ChapterScreen = ({ comicId }) => {
  const { chapters } = useChapters(comicId);
  const navigation = useNavigation();

  return (
    <>
      <ListGrid
        comics={chapters}
        scrollable={true}
        renderItem={({ item, itemWidth, height, marginSize }) => (
          <Pressable onPress={() => navigation.navigate("Reader", { item })}>
            <ComicItem
              image={item.chapterCover}
              title={item.title}
              issuesCount={item.chapterNumber}
              createdAt={item.releaseDate}
              itemWidth={itemWidth}
              height={height}
              marginSize={marginSize}
            />
          </Pressable>
        )}
      />
    </>
  );
};

export default ChapterScreen;
