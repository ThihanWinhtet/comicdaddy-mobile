import ComicGrid from "../Components/ComicGrid";
import { usePopularComics } from "../hooks"

const PopularComic = () => {
    const {comics, loading} = usePopularComics();
  return (
    <ComicGrid title={"Popular Comics For You"} comics={comics}/>
  )
}

export default PopularComic