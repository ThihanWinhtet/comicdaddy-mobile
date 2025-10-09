import { StyleSheet, TextInput } from "react-native";

const Input = ({ text , onChangeText, value}) => {
  return <TextInput style={styles.input} placeholder={text} value={value} onChangeText={onChangeText}/>;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#d2d2d2ff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 30,
  },
});
