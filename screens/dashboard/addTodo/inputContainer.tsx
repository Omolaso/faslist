import React, { ReactNode } from "react";
import { View } from "react-native";

const InputFieldContainer = ({ children }: { children: ReactNode }) => {
  return <View style={{ gap: 1 }}>{children}</View>;
};

export default InputFieldContainer;
