import React, { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { ThemedText } from "@/components/ThemedText";
import { PasswordType, SignupFormData } from "@/types/forms";
import { Colors } from "@/constants/Colors";
import { axiosInstance } from "@/utils/dataFetcher";

const SignupForm = () => {
  const [securedPassword, setSecuredPassword] = useState<PasswordType>({
    password: true,
    confirmPassword: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordToggle = (key: keyof PasswordType) => {
    setSecuredPassword((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSignup: SubmitHandler<SignupFormData> = async (data) => {
    setIsLoading(true);

    const payload = {
      username: data.username,
      email: data.email.toLowerCase(),
      phoneNumber: data.phone,
      password: data.password,
      confirm_password: data.confirmPassword,
    };

    try {
      const res = await axiosInstance.post("/users/register", payload);
      // console.log(res);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ gap: 30 }}>
      <View style={{ gap: 15 }}>
        <View style={styles.loginTextWrapper}>
          <View style={styles.inputContainer}>
            <AntDesign
              name="user"
              size={18}
              color={Colors.faslist.gray}
              style={{ alignSelf: "center" }}
            />
            <Controller
              name="username"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  textValue={value}
                  keyboardType={"email-address"}
                  placeholder={"Username"}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
          </View>
          {errors.username && (
            <ThemedText type="danger">Username is required</ThemedText>
          )}
        </View>

        <View style={styles.loginTextWrapper}>
          <View style={styles.inputContainer}>
            <AntDesign
              name="mail"
              size={18}
              color={Colors.faslist.gray}
              style={{ alignSelf: "center" }}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  textValue={value}
                  keyboardType={"email-address"}
                  onBlur={onBlur}
                  onChange={onChange}
                  placeholder={"Email Address"}
                />
              )}
            />
          </View>
          {errors.email && (
            <ThemedText type="danger">Email is required</ThemedText>
          )}
        </View>

        <View style={styles.loginTextWrapper}>
          <View style={styles.inputContainer}>
            <AntDesign
              name="phone"
              size={18}
              color={Colors.faslist.gray}
              style={{ alignSelf: "center" }}
            />
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <CustomTextInput
                  placeholder={"Phone Number"}
                  textValue={value}
                  keyboardType={"number-pad"}
                  onBlur={onBlur}
                  onChange={onChange}
                />
              )}
            />
          </View>
          {errors.phone && (
            <ThemedText type="danger">Phone Number is required</ThemedText>
          )}
        </View>

        <View style={styles.loginTextWrapper}>
          <View
            style={[styles.inputContainer, { justifyContent: "space-between" }]}
          >
            <View style={{ flexDirection: "row", flex: 1, gap: 10 }}>
              <AntDesign
                name="lock"
                size={18}
                color={Colors.faslist.gray}
                style={{ alignSelf: "center" }}
              />

              <Controller
                name="password"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextInput
                    textValue={value}
                    keyboardType={"default"}
                    placeholder={"Password"}
                    onBlur={onBlur}
                    onChange={onChange}
                    password={securedPassword.password}
                  />
                )}
              />
            </View>

            <Pressable
              onPress={() => handlePasswordToggle("password")}
              style={{ alignSelf: "center" }}
            >
              <Feather
                name={securedPassword.password ? "eye" : "eye-off"}
                size={18}
                color={Colors.faslist.gray}
              />
            </Pressable>
          </View>
          {errors.password && (
            <ThemedText type="danger">Password is required</ThemedText>
          )}
        </View>

        <View style={styles.loginTextWrapper}>
          <View
            style={[styles.inputContainer, { justifyContent: "space-between" }]}
          >
            <View style={{ flexDirection: "row", flex: 1, gap: 10 }}>
              <AntDesign
                name="lock"
                size={18}
                color={Colors.faslist.gray}
                style={{ alignSelf: "center" }}
              />

              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextInput
                    textValue={value}
                    keyboardType={"default"}
                    placeholder={"Confirm Password"}
                    onBlur={onBlur}
                    onChange={onChange}
                    password={securedPassword.confirmPassword}
                  />
                )}
              />
            </View>

            <Pressable
              onPress={() => handlePasswordToggle("confirmPassword")}
              style={{ alignSelf: "center" }}
            >
              <Feather
                name={securedPassword.confirmPassword ? "eye" : "eye-off"}
                size={18}
                color={Colors.faslist.gray}
              />
            </Pressable>
          </View>
          {errors.confirmPassword && (
            <ThemedText type="danger">Passwords must match</ThemedText>
          )}
        </View>
      </View>

      <CustomButton
        textValue={
          isLoading ? (
            <ActivityIndicator size={24} color={Colors.faslist.white} />
          ) : (
            "Sign Up"
          )
        }
        disabled={isLoading}
        clickFunction={handleSubmit(onSignup)}
      />

      <ThemedText type="default" style={{ fontWeight: 500 }}>
        Already have an account?{" "}
        <Link href="/(auth)">
          <ThemedText type="link">Login</ThemedText>
        </Link>
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTextWrapper: {
    gap: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.faslist.gray,
    borderRadius: 10,
    height: 56,
    paddingHorizontal: 10,
  },
});

export default SignupForm;
