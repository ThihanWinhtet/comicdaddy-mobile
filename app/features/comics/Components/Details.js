import { ScrollView, StyleSheet, Text, View } from "react-native";

const Details = ({ comic }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text style={styles.title}>Summary</Text>
          <Text style={styles.lable}>{comic.summary}</Text>
        </View>

        <View style={styles.info}>
          <View>
            <Text style={styles.title}>Genre</Text>
            <View style={styles.genContainer}>
              {comic.genres?.map((genre, index) => (
                <Text key={index} style={styles.genre}>
                  {genre}
                </Text>
              ))}

              {/* <Text style={styles.genre}>Actions</Text>
              <Text style={styles.genre}>Mystery</Text>
              <Text style={styles.genre}>Superhero</Text>
              <Text style={styles.genre}>Marvel</Text>
              <Text style={styles.genre}>Dick</Text>
              <Text style={styles.genre}>Graphic Novel</Text>
              <Text style={styles.genre}>Mikey</Text>
              <Text style={styles.genre}>Nickey</Text> */}
            </View>
          </View>

          <View>
            <Text style={styles.title}>Details</Text>
            <View style={styles.detailContainer}>
              <Text style={styles.details}>
                Title : Spiderman the day of Justice
              </Text>
              <Text style={styles.details}>
                Artists : ony Arthur, Mac Lurane
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    marginHorizontal: 10,
  },
  summary: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  info: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "white",
  },
  lable: {
    color: "white",
  },
  genre: {
    color: "white",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  genContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  details: {
    color: "white",
    marginVertical: 10,
  },
  detailContainer: {},
});
