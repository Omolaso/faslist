import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import NavigationTabs from "@/components/Tabs";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const UserProfilePage = () => {
  return (
    <CustomSafeAreaView>
      <ScrollView>
        <ThemedText>Profile Page</ThemedText>
      </ScrollView>

      <NavigationTabs />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UserProfilePage;
