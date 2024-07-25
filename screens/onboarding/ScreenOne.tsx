import { View, SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

const OnboardingScreenOne = () => {
  return (
    <ImageBackground
      style={styles.full}
      source={require("../../assets/images/onboarding-screen1.png")}
      resizeMode="contain"
    >
      <SafeAreaView style={styles.full}>
        <View style={[styles.full, styles.viewContainer]}>
          <View style={styles.onboardTextContainer}>
            <ThemedText
              type="title"
              style={{ textAlign: "center", color: Colors.faslist.black }}
            >
              Welcome To FasList
            </ThemedText>
            <ThemedText
              type="subtitle"
              style={{ textAlign: "center", color: Colors.faslist.gray }}
            >
              Simplify your life with FasList, your personal task manager.
            </ThemedText>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreenOne;

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  viewContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  onboardTextContainer: {
    justifyContent: "center",
    width: 290,
    height: 120,
    borderRadius: 4,
    backgroundColor: Colors.faslist.white,
  },
});
