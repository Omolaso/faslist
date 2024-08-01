import { Colors } from "@/constants/Colors";
import React, { ReactNode } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  ViewProps,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type CustomSafeAreaViewProps = ViewProps & {
  children: ReactNode;
};

const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[styles.container, style]} {...rest}>
          {children}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 15,
    fontFamily: "Poppins",
    backgroundColor: Colors.faslist.white,
  },
});

export default CustomSafeAreaView;
