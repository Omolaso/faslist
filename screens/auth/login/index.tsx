import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import LoginForm from "./loginForm";

const LoginPage = () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.loginTextWrapper}>
          <ThemedText type="title" style={{ fontSize: 18 }}>
            Welcome Back!
          </ThemedText>
          <ThemedText type="default" style={{ lineHeight: 20 }}>
            Log in to continue managing your tasks and staying organized.
          </ThemedText>
        </View>
        <LoginForm />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.faslist.white,
  },
  loginWrapper: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: 20,
  },
  loginTextWrapper: {
    gap: 1,
  },
});

export default LoginPage;
