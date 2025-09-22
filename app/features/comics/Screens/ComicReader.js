import WebView from "react-native-webview";

const ComicReader = ({ route }) => {
  const { item } = route.params;
  const fileUrl = item.pdfFileUrl;
  return (
    <>
      <WebView
        source={{
          uri: `http://192.168.1.7:3000/api/file/${fileUrl}`,
        }}
        scalesPageToFit={true}
      />
    </>
  );
};

export default ComicReader;
