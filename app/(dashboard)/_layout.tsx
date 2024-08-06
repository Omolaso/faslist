import { createContext } from "react";
import { Stack } from "expo-router";
import { RootSiblingParent } from "react-native-root-siblings";

export const UserContext = createContext<string | null>(null);

const DashboardLayout = () => {
  return (
    <RootSiblingParent>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="addTodo" />
        <Stack.Screen name="notification" />
        <Stack.Screen name="profile" />
      </Stack>
    </RootSiblingParent>
  );
};

export default DashboardLayout;
