import React from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  KeyboardTypeOptions,
  useColorScheme,
} from "react-native";
import { Colors } from "@/constants/Colors";

type ColorScheme = "light" | "dark";

export type CustomTextInputProps = TextInputProps & {
  keyboardType: KeyboardTypeOptions;
  textValue: string;
  placeholder: string;
  password?: boolean;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChange: (text: string) => void;
};

const CustomTextInput = ({
  textValue,
  keyboardType = "default",
  placeholder,
  password,
  onBlur,
  onChange,
  ...rest
}: CustomTextInputProps) => {
  const colorScheme = useColorScheme();

  return (
    <TextInput
      value={textValue}
      keyboardType={keyboardType}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChange}
      keyboardAppearance={colorScheme as ColorScheme}
      style={[styles.textInput, { ...rest }]}
      placeholderTextColor={Colors.faslist.gray}
      cursorColor={Colors.faslist.gray}
      secureTextEntry={password}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: { flex: 1, color: Colors.faslist.black, textAlignVertical: "top" },
});
