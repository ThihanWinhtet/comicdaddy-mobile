import { View, StyleSheet, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;
const banerHeight = width / (3 / 2);

const data = [
  require("../../../assets/banner/botysf-24-abr-about-2000x1125px-updated-5-24.jpg"),
  require("../../../assets/banner/16books.webp"),
  require("../../../assets/banner/BOOKS.webp"),
  require("../../../assets/banner/5cb8620bcc354cb7d74c897878f00251.jpg"),
];

const Banner = () => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={banerHeight}
        autoPlay
        autoPlayInterval={5000}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.image} source={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: banerHeight,
  },
});

export default Banner;
