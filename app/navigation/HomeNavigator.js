import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ComicDetails from "../features/comics/Screens/ComicDetails";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown : false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ComicDetails" component={ComicDetails} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
