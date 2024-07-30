import { Stack } from "expo-router";

const OnboardingScreensLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default OnboardingScreensLayout;
