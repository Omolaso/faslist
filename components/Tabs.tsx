import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Keyboard } from "react-native";
import { usePathname, router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const NavigationTabs = () => {
  const [keyboardShow, setKeyboardShow] = useState(false);
  const pathname = usePathname();

  const goToDashboard = () => {
    if (pathname === "/") {
      return;
    } else {
      router.replace("(dashboard)");
    }
  };

  useEffect(() => {
    const keyboardShow = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardShow(true);
    });
    const keyboardHide = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardShow(false);
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [keyboardShow]);

  return (
    <>
      {!keyboardShow && (
        <View style={styles.tabsContainer}>
          <Pressable
            onPress={() => goToDashboard()}
            style={[
              styles.NavButton,
              pathname === "/"
                ? { backgroundColor: Colors.faslist.gradientDark }
                : { backgroundColor: Colors.faslist.white },
            ]}
          >
            <AntDesign
              name="home"
              size={30}
              color={
                pathname === "/" ? Colors.faslist.white : Colors.faslist.gray
              }
            />
          </Pressable>

          <Pressable
            onPress={() => router.push("(dashboard)/addTodo")}
            style={[
              styles.NavButton,
              pathname === "/addTodo"
                ? { backgroundColor: Colors.faslist.gradientDark }
                : { backgroundColor: Colors.faslist.white },
            ]}
          >
            <AntDesign
              name="plus"
              size={30}
              color={
                pathname === "/addTodo"
                  ? Colors.faslist.white
                  : Colors.faslist.gray
              }
            />
          </Pressable>

          <Pressable
            onPress={() => router.replace("(dashboard)/profile")}
            style={[
              styles.NavButton,
              pathname === "/profile"
                ? { backgroundColor: Colors.faslist.gradientDark }
                : { backgroundColor: Colors.faslist.white },
            ]}
          >
            <AntDesign
              name="user"
              size={30}
              color={
                pathname === "/profile"
                  ? Colors.faslist.white
                  : Colors.faslist.gray
              }
            />
          </Pressable>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.faslist.lightGray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minHeight: 86,
    borderRadius: 100,
  },
  NavButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 66,
    height: 66,
    borderRadius: 50,
  },
});

export default NavigationTabs;
