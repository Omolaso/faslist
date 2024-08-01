import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import React from "react";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";

const NotificationsPage = () => {
  return (
    <CustomSafeAreaView>
      <View style={{ flex: 1 }}>
        <Text>NotificationsPage</Text>
        <CustomButton textValue={"Back"} clickFunction={() => router.back()} />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default NotificationsPage;
