import React, { ReactNode } from "react";
import { StyleSheet, SafeAreaView, ViewProps } from "react-native";
import { ReactNativeStatusBar } from "@/hooks/useRNApis";

interface CustomSafeAreaViewProps extends ViewProps {
  children: ReactNode;
}

const CustomSafeAreaView: React.FC<CustomSafeAreaViewProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: ReactNativeStatusBar.currentHeight || 0,
  },
});

export default CustomSafeAreaView;
