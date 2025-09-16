import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen({ children, ...otherProps }) {
  return (
    <SafeAreaView style={styles.container} {...otherProps}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
