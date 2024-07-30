import { Keyboard, View, Pressable, StyleSheet } from "react-native";
import { router, Link } from "expo-router";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { ThemedText } from "@/components/ThemedText";
import { LoginFormData } from "@/types/forms";
import { Colors } from "@/constants/Colors";

const LoginForm = () => {
  const [securedPassword, setSecuredPassword] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onLogin: SubmitHandler<LoginFormData> = (data) => {
    Keyboard.dismiss();
    console.log(data);
    reset();
    router.replace("(dashboard)");
  };

  return (
    <View style={{ gap: 30 }}>
      <View style={{ gap: 15 }}>
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
          <View
            style={[styles.inputContainer, { justifyContent: "space-between" }]}
          >
            <View style={{ flexDirection: "row", flex: 1, gap: 5 }}>
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
                    password={securedPassword}
                  />
                )}
              />
            </View>

            <Pressable
              onPress={() => setSecuredPassword((prev) => !prev)}
              style={{ alignSelf: "center" }}
            >
              <Feather
                name={securedPassword ? "eye" : "eye-off"}
                size={18}
                color={Colors.faslist.gray}
              />
            </Pressable>
          </View>
          {errors.password && (
            <ThemedText type="danger">Password is required</ThemedText>
          )}
        </View>
      </View>

      <CustomButton textValue="Login" clickFunction={handleSubmit(onLogin)} />

      <ThemedText type="default" style={{ fontWeight: 500 }}>
        Don&apos;t have an account?{" "}
        <Link href="(auth)/signup">
          <ThemedText type="link">Sign Up</ThemedText>
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
export default LoginForm;
