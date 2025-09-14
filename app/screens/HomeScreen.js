import { ScrollView } from "react-native-gesture-handler";
import Banner from "../features/Banners/Components/Banner";
import PopularComic from "../features/comics/Screens/PopularComic";

const HomeScreen = () => {
  return (
    <>
      <ScrollView>
        <Banner />
        <PopularComic />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
