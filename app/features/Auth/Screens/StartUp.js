import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Container from "../Components/Container";
import MainTitle from "../Components/MainTitle";
import Card from "../Components/Card";
import FormTitle from "../Components/FormTitle";
import FormBtn from "../Components/FormBtn";
import LinkBtn from "../Components/LinkBtn";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const genres = [
  {
    id: "1",
    name: "Marvel",
    icon: (
      <MaterialCommunityIcons name="alpha-m-box" size={30} color="#e23636" />
    ),
  },
  {
    id: "2",
    name: "DC",
    icon: (
      <MaterialCommunityIcons name="alpha-d-box" size={30} color="#0066ff" />
    ),
  },
  {
    id: "3",
    name: "Action",
    icon: <MaterialCommunityIcons name="arm-flex" size={30} color="#28a745" />,
  },
  {
    id: "4",
    name: "Adventure",
    icon: (
      <MaterialCommunityIcons name="sword-cross" size={30} color="#ff6600" />
    ),
  },
  {
    id: "5",
    name: "Comedy",
    icon: (
      <MaterialCommunityIcons name="drama-masks" size={30} color="#ffcc00" />
    ),
  },
  {
    id: "6",
    name: "Drama",
    icon: (
      <MaterialCommunityIcons name="heart-broken" size={30} color="#ff0000" />
    ),
  },
  {
    id: "7",
    name: "Fantasy",
    icon: <MaterialCommunityIcons name="snowflake" size={30} color="#00bfff" />,
  },
  {
    id: "8",
    name: "Slice of Life",
    icon: <MaterialCommunityIcons name="leaf" size={30} color="#7d5fff" />,
  },
  {
    id: "9",
    name: "Romance",
    icon: <MaterialCommunityIcons name="heart" size={30} color="#e91e63" />,
  },
  {
    id: "10",
    name: "Mystery",
    icon: <MaterialCommunityIcons name="magnify" size={30} color="#673ab7" />,
  },
  {
    id: "11",
    name: "Sci-Fi",
    icon: <MaterialCommunityIcons name="robot" size={30} color="#2196f3" />,
  },
  {
    id: "12",
    name: "Supernatural",
    icon: <MaterialCommunityIcons name="ghost" size={30} color="#ff5722" />,
  },
  {
    id: "13",
    name: "Thriller",
    icon: <MaterialCommunityIcons name="ghost" size={30} color="#000" />,
  },
  {
    id: "14",
    name: "Historical",
    icon: <MaterialCommunityIcons name="bank" size={30} color="#9e9e9e" />,
  },
  {
    id: "15",
    name: "Sports",
    icon: (
      <MaterialCommunityIcons name="basketball" size={30} color="#4caf50" />
    ),
  },
  {
    id: "16",
    name: "Psychology",
    icon: <FontAwesome5 name="brain" size={30} color="#f44336" />,
  },
];

const StartUp = () => {
  return (
    <>
      <Container>
        <MainTitle
          title={"Let Us Know"}
          subTitle={"To Give You a Great Experiences"}
        />

        <Card>
          <FormTitle title={"Choose Your Fav Genres"}/>

          <View style={styles.container}>
            <FlatList
              data={genres}
              renderItem={({ item }) => (
                <TouchableOpacity style={[styles.card]}>
                  {item.icon}
                  <Text style={styles.label} numberOfLines={1}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
              numColumns={4}
              columnWrapperStyle={styles.row}
            />

            <FormBtn text={"Continue"} />
            <LinkBtn text="Skip For Now" />
          </View>
        </Card>
      </Container>
    </>
  );
};

export default StartUp;

const styles = StyleSheet.create({
  container : {
    marginTop : 5,
  },
  row: {
    justifyContent: "space-around",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    margin: 6,
    flex: 1,
  },
  label: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 6,
  },
});
