import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Colors } from "@/constants/Colors";

const MainDashboard = () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <Text>MainDashboard</Text>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.faslist.white,
  },
});

export default MainDashboard;
