import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FormBtn = ({ text, color = "#ff6600", onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.logInBtn, , { backgroundColor: color }]}
    >
      <Text style={[styles.loginText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FormBtn;

const styles = StyleSheet.create({
  logInBtn: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    fontWeight: "600",
    color: "white",
  },
});
