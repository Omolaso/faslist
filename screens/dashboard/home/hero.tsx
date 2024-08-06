import React from "react";
import { Platform, Pressable, StyleSheet, View, Image } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import Boxes from "./boxes";

const DashboardHomeHeroSection = () => {
  return (
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

      <View style={[styles.profileView, styles.taskCountContainer]}>
        <ThemedText type="default" style={styles.taskHeader}>
          You've 20 tasks scheduled for this month.
        </ThemedText>

        <LinearGradient
          colors={[Colors.faslist.blue, Colors.faslist.white]}
          style={styles.totalTasks}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.7 }}
        >
          <View style={styles.totalTasksContent}>
            <ThemedText type="title" style={styles.topText}>
              8
            </ThemedText>
            <MaterialCommunityIcons
              name="slash-forward"
              size={25}
              color={Colors.faslist.gray}
            />
            <ThemedText type="subtitle" style={styles.bottomText}>
              20
            </ThemedText>
          </View>
        </LinearGradient>
      </View>

      <Image source={require("@/assets/images/line.png")} style={styles.line} />

      <Boxes />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  dashboardHero: {
    flex: 0.4,
    borderRadius: 30,
    gap: 20,
    paddingBottom: 20,
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
    borderRadius: 46,
  },
  taskCountContainer: {
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "80%",
    marginHorizontal: "auto",
  },
  taskHeader: {
    color: Colors.faslist.gray,
    fontSize: 18,
    fontWeight: "400",
    maxWidth: 224,
  },
  totalTasks: {
    alignItems: "stretch",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 2,
  },
  totalTasksContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e1f2",
    borderRadius: 50,
    paddingVertical: 10,
  },
  topText: {
    color: Colors.faslist.blue,
    position: "absolute",
    top: 3,
    left: 15,
  },
  bottomText: {
    position: "absolute",
    bottom: 10,
    color: Colors.faslist.gray,
    right: 9,
  },
  line: {
    alignSelf: "center",
    width: "100%",
    maxWidth: "80%",
  },
});

export default DashboardHomeHeroSection;
