import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const badges = [
  {
    id: 1,
    name: "ant-design",
    backgroundColor: "#FF5C00",
    color: "white",
    label: "MildStone\nReader",
  },
  {
    id: 2,
    name: "fire",
    backgroundColor: "#728CFF",
    color: "white",
    label: "Most Noise\nMaker",
  },
  {
    id: 3,
    name: "rocket",
    backgroundColor: "#FFD900",
    color: "black",
    label: "Weekly\n Activist",
  },
  {
    id: 4,
    name: "crown",
    backgroundColor: "#FF0000",
    color: "white",
    label: "Hot-Damn\nReader",
  },
  {
    id: 5,
    name: "meh",
    backgroundColor: "#D9D9D9",
    color: "black",
    label: "Activity\nLover",
  },
  {
    id: 6,
    name: "aliwangwang",
    backgroundColor: "#12848B",
    color: "white",
    label: "Let it Out\nMy Mate",
  },
];

const Badges = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Badges</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {badges.map((badge, index) => (
          <View key={index} style={styles.badgeContainer}>
            <AntDesign
              style={[
                styles.badge,
                {
                  backgroundColor: badge.backgroundColor,
                  color: badge.color,
                },
              ]}
              name={badge.name}
              size={18}
            />
            <Text style={styles.badgeLabel}>{badge.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 17,
  },
  badgeContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  badge: {
    padding: 18,
    borderRadius: "100%",
  },
  badgeLabel: {
    fontSize: 11,
    fontWeight: "200",
    textAlign: "center",
    fontStyle: "italic",
    marginTop: 5,
  },
});
