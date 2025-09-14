import { StyleSheet} from 'react-native'

import { useRelatedComic } from '../hooks'
import ComicGrid from '../Components/ComicGrid'

const RelatedComic = () => {
    const {comics, loading} = useRelatedComic("68bbccc912d73dc22b7047c9");
  return (
    <ComicGrid comics={comics}/>
  )
}

export default RelatedComic

const styles = StyleSheet.create({})