import React from "react";
import { Colors } from "@/constants/Colors";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";

type ButtonType = {
  textValue: string;
  disabled?: boolean;
  clickFunction: () => void;
};

const CustomButton = ({ textValue, disabled, clickFunction }: ButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => clickFunction()}
      disabled={disabled}
      style={styles.customButtonStyles}
    >
      <ThemedText type="title" style={styles.customButtonTextStyles}>
        {textValue}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customButtonStyles: {
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.faslist.blue,
  },
  customButtonTextStyles: {
    color: Colors.faslist.white,
  },
});

export default CustomButton;
