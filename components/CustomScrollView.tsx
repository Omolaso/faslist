import React, { ReactNode } from "react";
import { ScrollView } from "react-native";

const CustomScrollView = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>{children}</ScrollView>
  );
};

export default CustomScrollView;
