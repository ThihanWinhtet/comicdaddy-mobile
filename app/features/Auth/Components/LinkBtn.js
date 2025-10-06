import { StyleSheet, Text, TouchableOpacity } from "react-native";

const LinkBtn = ({ text, color = "#0073ffff", ...otherProps }) => {
  return (
    <TouchableOpacity style={[styles.logInBtn, {...otherProps}]}>
      <Text style={[styles.loginText, { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LinkBtn;

const styles = StyleSheet.create({
  logInBtn: {
    alignItems: "center"
  },
  loginText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
