import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Pressable } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ReactNativeStatusBar } from "@/hooks/useRNApis";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const SignUpPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ThemedText type="title">Signup Page</ThemedText>
      </View>
      <Link href={"/"}>
        <ThemedText type="link">Login</ThemedText>
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ReactNativeStatusBar.currentHeight || 0,
    backgroundColor: Colors.faslist.white,
  },
});

export default SignUpPage;
