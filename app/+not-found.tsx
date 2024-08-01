import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";

export default function NotFoundScreen() {
  return (
    <CustomSafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Oops!" }} />
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link href="(dashboard)" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
