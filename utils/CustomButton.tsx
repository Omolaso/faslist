import React from "react";
import { Colors } from "@/constants/Colors";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";

type ButtonType = {
  textValue: string;
  clickFunction: () => void;
};

const CustomButton = ({ textValue, clickFunction }: ButtonType) => {
  return (
    <TouchableOpacity
      onPress={() => clickFunction()}
      style={styles.customButtonStyles}
    >
      <ThemedText type="default" style={styles.customButtonTextStyles}>
        {textValue}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customButtonStyles: {
    width: 350,
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
