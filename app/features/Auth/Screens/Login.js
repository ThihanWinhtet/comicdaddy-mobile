import { StyleSheet, Text, View } from "react-native";

import Input from "../Components/Input";
import FormBtn from "../Components/FormBtn";
import LinkBtn from "../Components/LinkBtn";
import FormTitle from "../Components/FormTitle";
import MainTitle from "../Components/MainTitle";
import Card from "../Components/Card";
import Container from "../Components/Container";

const Login = () => {
  return (
    <>
      <Container>
        <MainTitle title={"HELLO"} subTitle={"Welcome Back"} />

        <Card>
          <FormTitle
            title={"Login Account"}
            subTitle={
              "Professional login, signup and account registration form mobile"
            }
          />

          <View style={styles.container}>
            <Input text={"Your Email Address"} />
            <Input text={"Your Password"} />
            <FormBtn text={"Login"} />
            <FormBtn text="Continue With Google" color="#FF0000" />

            <Text style={{ textAlign: "center" }}>
              Don't have an Account Yet?
            </Text>
            <LinkBtn text="Create One" />
            <LinkBtn text="Or Continue as Guest" {...{ marginTop: 15 }} />
          </View>
        </Card>
      </Container>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container : {}
});
