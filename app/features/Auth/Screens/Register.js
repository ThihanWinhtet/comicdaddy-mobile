import { StyleSheet, Text, View } from "react-native";

import Container from "../Components/Container";
import MainTitle from "../Components/MainTitle";
import Card from "../Components/Card";
import FormTitle from "../Components/FormTitle";
import Input from "../Components/Input";
import FormBtn from "../Components/FormBtn";
import LinkBtn from "../Components/LinkBtn";

const Register = () => {
  return (
    <>
      <Container>
        <MainTitle title={"JOIN US"} subTitle={"Create a New Account"} />

        <Card>
          <FormTitle
            title={"Personal Info"}
            subTitle={
              "Professional login, signup and account registration form mobile"
            }
          />

          <View>
            <Input text={"Your Name"} />
            <Input text={"Your Email Address"} />
            <Input text={"Your Password"} />
            <FormBtn text={"SignUp"} />
            <FormBtn text="SignUp With Google" color="#FF0000" />

            <Text style={{ textAlign: "center" }}>Already had an Account?</Text>
            <LinkBtn text="Sign In" />
            <LinkBtn text="Or Continue as Guest" {...{ marginTop: 15 }} />
          </View>
        </Card>
      </Container>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({});
