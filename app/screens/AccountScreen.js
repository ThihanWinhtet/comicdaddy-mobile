import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Screen from "../components/screen";
import Profile from "../features/Account/Components/Profile";
import ReadingList from "../features/Account/Components/ReadingList";
import Badges from "../features/Account/Components/Badges";
import AccSettings from "../features/Account/Components/AccSettings";

const AccountScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Screen style={styles.container}>
        <Profile />
        <ReadingList />
        <Badges />
        <AccSettings />
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 14
  },
});

export default AccountScreen;
