import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const ComicReader = ({ route }) => {
  const { item } = route.params;
  const fileUrl = item.pdfFileUrl;
  return (
    <>
      <WebView
        source={{
          uri: `http://192.168.1.2:3000/api/file/${fileUrl}`,
        }}
        style={styles.webview}
        scalesPageToFit={true}
        renderLoading={() => (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        )}
        startInLoadingState={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  loading: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default ComicReader;
