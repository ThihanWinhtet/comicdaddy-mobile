import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome6,
} from "@expo/vector-icons";

import Search from "../components/Search";
import Screen from "../components/screen";

const Browse = () => {
  return (
    <Screen>
      {/* Search Component */}
      <Search />

      {/* Search by item Component */}
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>History</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
              <Text>hentai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text>big boobs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text>overwatch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text>overwatch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text>overwatch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text>overwatch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text>overwatch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Text>overwatch</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.title}>Status</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
              <MaterialCommunityIcons name="flag-outline" size={15} />
              <Text>hentai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <MaterialCommunityIcons name="flag-checkered" size={15} />
              <Text>big boobs</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <Text style={styles.title}>Status</Text>
          <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
              <AntDesign name="dingding" size={15} />
              <Text>hentai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <MaterialCommunityIcons name="flower-outline" size={15} />
              <Text>big boobs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <FontAwesome6 name="gripfire" size={15} />
              <Text>overwatch</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Comics Grid */}
      </ScrollView>
    </Screen>
  );
};

export default Browse;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
  item: {
    backgroundColor: "lightgray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
