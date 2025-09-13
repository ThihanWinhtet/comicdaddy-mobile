import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import BrowseScreen from "../screens/BrowseScreen";
import CommunityScreen from "../screens/CommunityScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Bookmark" component={BookmarkScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
