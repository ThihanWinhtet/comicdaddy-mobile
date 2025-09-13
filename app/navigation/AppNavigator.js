import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={`home${!focused ? "-outline" : ""}`}
                color={color}
                size={size}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={`compass${!focused ? "-outline" : ""}`}
                color={color}
                size={size}
              />
            ),
          }}
          name="Browse"
          component={BrowseScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={`crown${!focused ? "-outline" : ""}`}
                color={color}
                size={size}
              />
            ),
          }}
          name="Engine"
          component={CommunityScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={`bookmark${!focused ? "-outline" : ""}`}
                color={color}
                size={size}
              />
            ),
          }}
          name="Bookmark"
          component={BookmarkScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={`account-circle${!focused ? "-outline" : ""}`}
                color={color}
                size={size}
              />
            ),
          }}
          name="Account"
          component={AccountScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
