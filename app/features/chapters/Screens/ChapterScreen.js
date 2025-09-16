import { Pressable } from "react-native";
import ListGrid from "../../../components/ListGrid";
import { useChapters } from "../hooks";
import ComicItem from "../../comics/Components/ComicItem";

const ChapterScreen = ({ comicId }) => {
  const { chapters } = useChapters(comicId);
  return (
    <>
      <ListGrid
        comics={chapters}
        scrollable={true}
        renderItem={({ item, itemWidth, height, marginSize }) => (
          <Pressable
            onPress={() => navigation.navigate("ComicDetails", { item })}
          >
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
