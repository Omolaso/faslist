import { Stack } from "expo-router";

const DashboardLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="addTodo" />
      <Stack.Screen name="notification" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default DashboardLayout;
