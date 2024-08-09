import { useState, useContext } from "react";
import {
  Keyboard,
  View,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { router, Link } from "expo-router";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { AntDesign, Feather } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { ThemedText } from "@/components/ThemedText";
import { LoginFormData } from "@/types/forms";
import { Colors } from "@/constants/Colors";
import { axiosInstance } from "@/utils/dataFetcher";
import { saveKey } from "@/utils/secureStore";
import { UserContext } from "@/app/_layout";
import { UserContextProps, UserData } from "@/types/userData";

const LoginForm = () => {
  const [securedPassword, setSecuredPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext) as UserContextProps;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onLogin: SubmitHandler<LoginFormData> = async (data) => {
    setIsLoading(true);

    const payload = {
      email: data.email.toLowerCase(),
      password: data.password,
    };

    try {
      const res = await axiosInstance.post("/users/login", payload);
      saveKey("token", res.data.token);
      saveKey("firstTime", "false");
      setUser(res.data.admin as UserData);
      // console.log(res);
      router.replace("/(dashboard)");
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      Keyboard.dismiss();
      setIsLoading(false);
    }
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

      <CustomButton
        textValue={
          isLoading ? (
            <ActivityIndicator size={24} color={Colors.faslist.white} />
          ) : (
            "Login"
          )
        }
        disabled={isLoading}
        clickFunction={handleSubmit(onLogin)}
      />

      <ThemedText type="default" style={{ fontWeight: 500 }}>
        Don&apos;t have an account?{" "}
        <Link href="/(auth)/signup">
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
