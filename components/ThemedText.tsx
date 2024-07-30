import { Text, type TextProps, StyleSheet } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "subtitle" | "link" | "danger";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "danger" ? styles.danger : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.faslist.black,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 32,
    color: Colors.faslist.black,
  },
  subtitle: {
    fontSize: 13.3,
    fontWeight: "bold",
    color: Colors.faslist.black,
  },
  link: {
    fontSize: 16,
    lineHeight: 30,
    color: Colors.faslist.blue,
  },
  danger: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.faslist.red,
  },
});
