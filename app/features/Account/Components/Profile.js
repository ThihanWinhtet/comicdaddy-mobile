import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImg}
        source={{
          uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile.png",
        }}
      ></Image>
      <View style={styles.profileInfo}>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>Thihan Winhtet</Text>
          <Text style={styles.profileStatus}>PRO</Text>
        </View>
        <Text style={styles.profileMail}>thihanwinhtet1999@gmail.com</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: "100%",
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 3,
  },
  profileStatus: {
    backgroundColor: "#FF5C00",
    fontSize: 10,
    paddingHorizontal: 5,
    paddingVertical: 1.2,
    alignItems: "center",
    borderRadius: 3,
    marginLeft: 10,
    color: "white",
  },
  profileMail: {
    fontSize: 14,
  },
});
