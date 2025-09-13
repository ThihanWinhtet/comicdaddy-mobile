import ComicGrid from "../Components/ComicGrid";
import { useComics } from "../hooks";

const ComicScreen = () => {
  const { comics, loading } = useComics();
  console.log(comics);
  return (
    <>
      <ComicGrid comics={comics} />
    </>
  );
};

export default ComicScreen;
