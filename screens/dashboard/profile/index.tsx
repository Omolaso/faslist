import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  View,
  Image,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import NavigationTabs from "@/components/Tabs";
import { ThemedText } from "@/components/ThemedText";
import { UserProfileData } from "@/types/forms";
import CustomTextInput from "@/components/CustomTextInput";
import { Colors } from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import CustomScrollView from "@/components/CustomScrollView";

const UserProfilePage = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserProfileData>();

  const editProfile: SubmitHandler<UserProfileData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <CustomSafeAreaView style={{ backgroundColor: Colors.faslist.white }}>
      <CustomScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.profileWrapper}>
            <View style={styles.profileHeader}>
              <ThemedText type="title" style={styles.pageTitle}>
                Your Profile
              </ThemedText>

              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => console.log("logged")}
              >
                <AntDesign
                  name="logout"
                  size={18}
                  color={Colors.faslist.white}
                />
                <ThemedText
                  type="title"
                  style={{ color: Colors.faslist.white, fontSize: 18 }}
                >
                  Logout
                </ThemedText>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center" }}>
              <Image
                source={require("@/assets/images/profileImage.png")}
                style={{
                  width: 150,
                  height: 150,
                  alignSelf: "center",
                  gap: 2,
                }}
              />

              {/* BUTTON TO SELECT IMAGE FROM MY PICTURES */}

              <ThemedText type="default">
                Toggle below to edit profile
              </ThemedText>

              <Switch
                trackColor={{
                  false: Colors.faslist.black,
                  true: Colors.faslist.gray,
                }}
                thumbColor={Colors.faslist.white}
                ios_backgroundColor={Colors.faslist.gray}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>

            <View style={{ gap: 15, alignSelf: "stretch" }}>
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
                        editable={isEnabled}
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
                        editable={isEnabled}
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
                        editable={isEnabled}
                      />
                    )}
                  />
                </View>
                {errors.phone && (
                  <ThemedText type="danger">
                    Phone Number is required
                  </ThemedText>
                )}
              </View>

              {isEnabled && (
                <CustomButton
                  textValue="Edit Profile"
                  // disabled={true}
                  clickFunction={handleSubmit(editProfile)}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </CustomScrollView>

      <NavigationTabs />
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    alignSelf: "center",
    fontSize: 24,
    color: Colors.faslist.black,
  },
  profileWrapper: {
    flex: 1,
    gap: 15,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
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
  logoutButton: {
    backgroundColor: Colors.faslist.red,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    padding: 5,
    borderRadius: 10,
    maxWidth: "30%",
    gap: 5,
  },
});

export default UserProfilePage;
