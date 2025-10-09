import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../features/Auth/authContext";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import HomeScreen from "../screens/HomeScreen";
import ComicDetails from "../features/comics/Screens/ComicDetails";
import ComicScreen from "../features/comics/Screens/ComicScreen";
import ComicReader from "../features/comics/Screens/ComicReader";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="App" component={AppNavigator} />

            <Stack.Screen name="MainHome" component={HomeScreen} />
            <Stack.Screen
              name="ComicDetails"
              component={ComicDetails}
              options={{ unmountOnBlur: true }}
            />
            <Stack.Screen name="SearchScreen" component={ComicScreen} />
            <Stack.Screen name="Reader" component={ComicReader} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
