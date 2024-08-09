import { createContext, useEffect, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { RootSiblingParent } from "react-native-root-siblings";
import { FetchProvider } from "@/components/FetchProvider";

import { useColorScheme } from "@/hooks/useColorScheme";
import { UserContextProps, UserData } from "@/types/userData";

export const UserContext = createContext<UserContextProps | null>(null);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [user, setUser] = useState<UserData | null>(null);

  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <FetchProvider>
        <UserContext.Provider value={{ user, setUser }}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(onboarding)" />
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(dashboard)" />
              <Stack.Screen name="+not-found" />
            </Stack>
          </ThemeProvider>
        </UserContext.Provider>
      </FetchProvider>
    </RootSiblingParent>
  );
}
