import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Screen from "./screen";

const Search = ({ value, onChange, onClear }) => {
  // const [search, setSearch] = useState("");

  return (
    // <Screen edges={["top", "left", "right"]}>
    <View style={styles.container}>
      <View style={styles.search}>
        <Ionicons name="search-outline" style={styles.searchIcon} size={17} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={value}
          onChangeText={onChange}
        />
      </View>
      <TouchableOpacity style={styles.close} onPress={onClear}>
        <AntDesign name="close" />
      </TouchableOpacity>
    </View>
    // </Screen>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "space-between",
    margin: 15,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 100,
    width: "85%",
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    marginLeft: 10,
    width: "80%",
    height: 40,
  },
  close: {
    backgroundColor: "lightgray",
    padding: 14,
    borderRadius: 100,
  },
});
