import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import SignupForm from "./signupForm";

const SignUpPage = () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.loginTextWrapper}>
          <ThemedText type="title" style={{ fontSize: 18 }}>
            Join FasList Today!
          </ThemedText>
          <ThemedText type="default" style={{ lineHeight: 20 }}>
            Create an account to start organizing your tasks and earning
            rewards.
          </ThemedText>
        </View>
        <SignupForm />
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

export default SignUpPage;
