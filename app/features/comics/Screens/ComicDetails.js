import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Screen from "../../../components/screen";
import ComicItem from "../Components/ComicItem";
import ComicGrid from "../Components/ComicGrid";
import Details from "../Components/Details";
import ChapterScreen from "../../chapters/Screens/ChapterScreen";

const width = Dimensions.get("window").width;
const banerHeight = width / (3 / 2);

const Tab = createMaterialTopTabNavigator();

const comic = {
  id: 1,
  image: require("../../../assets/book/TessOfTheRoad.jpg"),
  title: "Spider-Man into the SpiderVerse",
  subTitle: "#issue 45 (2019)",
  writer: "Alan Jammy",
  publisher: "Marvel",
  status: "On Going",
  issue: "#issues 5",
};

const ComicDetails = ({ route }) => {
  const { item } = route.params;
  const comic = item;
  return (
    <>
      <View style={styles.cover}>
        <Screen style={styles.container}>
          <ComicItem image={comic.coverImgUrl} />
          <View style={styles.info}>
            <Text style={styles.title}>{comic.title}</Text>
            <Text style={styles.details}>
              <Text style={styles.lable}>Writer : </Text>
              {comic.writer}
            </Text>
            <Text style={styles.details}>
              <Text style={styles.lable}>Publisher : </Text>
              {comic.publisher}
            </Text>
            <Text style={styles.status}>
              {comic.status ? "Completed" : "Ongoing"} {"   "} #issues{" "}
              {comic.issuesCount}
            </Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.readBtn}>
                <Text style={styles.readText}>Read</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actIcon}>
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  size={25}
                  color={"white"}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actIcon}>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={20}
                  color={"white"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Screen>
      </View>

      <Tab.Navigator initialRouteName="Details">
        <Tab.Screen name="Issues">
          {(props) => <ChapterScreen {...props} comicId={comic._id} />}
        </Tab.Screen>

        <Tab.Screen name="Details">
          {(props) => <Details {...props} comic={comic} />}
        </Tab.Screen>
        <Tab.Screen name="Related" component={ComicGrid} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    backgroundColor: "gray",
    width: width,
    height: banerHeight,
    justifyContent: "flex-end",
  },
  container: {
    width: width,
    height: banerHeight,
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 8,
    paddingTop: 20,
  },
  info: {
    marginLeft: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 15,
    color: "white",
  },
  details: {
    marginVertical: 8,
    fontWeight: "500",
    color: "white",
  },
  lable: {
    fontWeight: "300",
    color: "white",
  },
  status: {
    marginVertical: 8,
    fontWeight: "500",
    color: "white",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  readBtn: {
    backgroundColor: "dodgerblue",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginRight: 10,
  },
  readText: {
    color: "white",
  },
  actIcon: {
    marginLeft: 15,
  },
});

export default ComicDetails;
