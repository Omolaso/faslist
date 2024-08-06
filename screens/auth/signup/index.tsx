import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import SignupForm from "./signupForm";

const SignUpPage = () => {
  const inset = useSafeAreaInsets();
  
  return (
    <CustomSafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.loginWrapper, { marginTop: inset.top }]}>
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
      </ScrollView>
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
