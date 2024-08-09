import { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router, Redirect } from "expo-router";
import Carousel from "pinar";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import CustomButton from "@/components/CustomButton";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import { getValueFor } from "@/utils/secureStore";

const OnboardingScreen = () => {
  const carouselRef = useRef<Carousel | null>(null);

  const handleChangeToNextPage = () => {
    carouselRef.current?.scrollToNext();
  };

  useEffect(() => {
    const checkFirstTimer = async () => {
      const checker = await getValueFor("firstTime");
      if (checker) {
        router.replace("/(auth)");
      }
    };

    checkFirstTimer();
  }, []);

  return (
    <Carousel
      ref={carouselRef}
      showsControls={false}
      dotsContainerStyle={styles.dotsContainerStyle}
      dotStyle={styles.dotStyle}
      activeDotStyle={[
        styles.dotStyle,
        { backgroundColor: Colors.faslist.blue },
      ]}
    >
      <ImageBackground
        style={styles.full}
        source={require("@/assets/images/onboarding-screen1.png")}
        resizeMode="cover"
      >
        <CustomSafeAreaView style={styles.full}>
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

            <TouchableOpacity
              onPress={() => handleChangeToNextPage()}
              style={styles.onboardBTN}
            >
              <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </CustomSafeAreaView>
      </ImageBackground>

      <ImageBackground
        style={styles.full}
        source={require("@/assets/images/onboarding-screen2.png")}
        resizeMode="cover"
      >
        <CustomSafeAreaView style={styles.full}>
          <View style={[styles.full, styles.viewContainer]}>
            <View style={styles.onboardTextContainer}>
              <ThemedText
                type="title"
                style={{ textAlign: "center", color: Colors.faslist.black }}
              >
                Plan Ahead
              </ThemedText>
              <ThemedText
                type="subtitle"
                style={{ textAlign: "center", color: Colors.faslist.gray }}
              >
                Use your calender to see your tasks for the month.
              </ThemedText>
            </View>

            <TouchableOpacity
              onPress={() => handleChangeToNextPage()}
              style={styles.onboardBTN}
            >
              <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </CustomSafeAreaView>
      </ImageBackground>

      <ImageBackground
        style={styles.full}
        source={require("@/assets/images/onboarding-screen3.png")}
        resizeMode="cover"
      >
        <CustomSafeAreaView style={styles.full}>
          <View
            style={[
              styles.full,
              styles.viewContainer,
              { alignItems: "stretch" },
            ]}
          >
            <View style={styles.onboardTextContainer}>
              <ThemedText
                type="title"
                style={{ textAlign: "center", color: Colors.faslist.black }}
              >
                Make it Fun
              </ThemedText>
              <ThemedText
                type="subtitle"
                style={{ textAlign: "center", color: Colors.faslist.gray }}
              >
                Earn points and badges as you complete your tasks.
              </ThemedText>
            </View>

            <CustomButton
              textValue={"Get Started"}
              clickFunction={() => router.replace("/(auth)")}
            />
          </View>
        </CustomSafeAreaView>
      </ImageBackground>
    </Carousel>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  viewContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    gap: 40,
  },
  onboardTextContainer: {
    justifyContent: "center",
    alignSelf: "center",
    width: 290,
    height: 120,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.faslist.white,
  },
  dotsContainerStyle: {
    position: "absolute",
    ...Platform.select({
      ios: {
        bottom: 115,
      },
      android: {
        bottom: 80,
      },
    }),
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dotStyle: {
    backgroundColor: Colors.faslist.white,
    width: 25,
    height: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  onboardBTN: {
    width: 46,
    height: 46,
    borderRadius: 46,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.faslist.blue,
  },
});

export default OnboardingScreen;
