import { StyleSheet, Text, View } from "react-native";
import AccSettingItem from "./AccSettingItem";

const items = [
  {
    id: 1,
    icon: "bookmark-multiple-outline",
    text: "Your Bookmarks",
    link: "",
  },
  {
    id: 2,
    icon: "fingerprint",
    text: "Preferences",
    link: "",
  },
  {
    id: 3,
    icon: "account-cowboy-hat-outline",
    text: "Get Some Help",
    link: "",
  },
  {
    id: 4,
    icon: "bullhorn-variant-outline",
    text: "Speak about Us to Your Friends",
    link: "",
  },

  {
    id: 5,
    icon: "logout",
    text: "Log Out",
    link: "",
  },
];

const AccSettings = () => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <AccSettingItem key={index} icon={item.icon} text={item.text} />
      ))}
    </View>
  );
};

export default AccSettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 30,
    marginBottom: 20,
  },
});
