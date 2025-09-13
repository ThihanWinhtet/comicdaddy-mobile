import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeNavigator from "./HomeNavigator";
import AccountNavigator from "./AccountNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="Auth" component={AccountNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
