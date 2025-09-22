import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ComicDetails from "../features/comics/Screens/ComicDetails";
import ComicScreen from "../features/comics/Screens/ComicScreen";
import ComicReader from "../features/comics/Screens/ComicReader";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="MainHome" component={HomeScreen} />
      <HomeStack.Screen name="ComicDetails" component={ComicDetails} />
      <HomeStack.Screen name="SearchScreen" component={ComicScreen} />
      <HomeStack.Screen name="Reader" component={ComicReader} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
