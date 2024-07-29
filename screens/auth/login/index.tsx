import React from "react";
import { Link } from "expo-router";
import { StyleSheet, View, TextInput } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomButton from "@/utils/CustomButton";

type LoginFormData = { email: string; password: string };

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onLogin: SubmitHandler<LoginFormData> = (data) => console.log(data);

  return (
    <View style={styles.loginTextWrapper}>
      <View style={styles.loginTextWrapper}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              keyboardType="email-address"
              placeholder="Enter your email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && (
          <ThemedText type="danger">Email is required</ThemedText>
        )}
      </View>

      <View style={styles.loginTextWrapper}>
        <Controller
          name="password"
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <ThemedText type="danger">Password is required</ThemedText>
        )}
      </View>

      <CustomButton textValue="Submit" clickFunction={handleSubmit(onLogin)} />

      <ThemedText type="default">
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <ThemedText type="link">Sign Up</ThemedText>
        </Link>
      </ThemedText>
    </View>
  );
};

const LoginPage = () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <View style={styles.loginWrapper}>
        <View style={styles.loginTextWrapper}>
          <ThemedText type="title">Welcome Back!</ThemedText>
          <ThemedText type="subtitle">
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
    gap: 20,
  },
  loginTextWrapper: {
    gap: 10,
  },
  // loginFormWrapper: {},
});

export default LoginPage;
