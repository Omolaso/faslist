import React from "react";
import { StyleSheet, View, Image, Platform, Pressable } from "react-native";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

const MainDashboard = () => {
  return (
    <CustomSafeAreaView style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Colors.faslist.gradientLight, Colors.faslist.gradientDark]}
        style={styles.dashboardHero}
      >
        <View style={styles.dashboardHeader}>
          <View style={styles.profileView}>
            <View style={styles.userImageContainer}>
              <Image
                source={require("@/assets/images/profileImage.png")}
                style={styles.userAvatar}
              />
            </View>
            <View style={{ gap: 0.5 }}>
              <ThemedText type="default" style={{ fontWeight: 300 }}>
                Hello Adesanya
              </ThemedText>
              <ThemedText
                type="subtitle"
                style={{ color: Colors.faslist.gray, fontWeight: 300 }}
              >
                {new Date().toLocaleString()}
              </ThemedText>
            </View>
          </View>

          <Link
            href={"(dashboard)/notification"}
            asChild
            push
            style={{ marginRight: 15 }}
          >
            <Pressable style={styles.notificationBell}>
              <AntDesign name="bells" size={18} color="black" />
            </Pressable>
          </Link>
        </View>

        <View style={[styles.profileView, { justifyContent: "space-around" }]}>
          <ThemedText>You've 20 tasks scheduled for this month.</ThemedText>

          <View style={styles.totalTasks}></View>

          <View></View>
        </View>
      </LinearGradient>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.faslist.white,
  },
  dashboardHero: {
    flex: 0.4,
    alignItems: "stretch",
    borderRadius: 30,
  },
  dashboardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  userImageContainer: {
    padding: 1,
    backgroundColor: Colors.faslist.avatarBg,
    borderRadius: 30,
  },
  userAvatar: {
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0.05)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  notificationBell: {
    backgroundColor: Colors.faslist.white,
    width: 36,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  totalTasks: {
    borderWidth: 2,
    borderColor: Colors.faslist.white,
  },
});

export default MainDashboard;
