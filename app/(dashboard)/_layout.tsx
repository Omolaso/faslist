import React, { createContext } from "react";
import useSWR from "swr";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TaskProps } from "@/types/tasks";
import { ToastNotification } from "@/utils/toast";
import { UserTaskFetchProps, TaskPropsResponse } from "@/types/tasks";

export const UserTasks = createContext<UserTaskFetchProps | null>(null);

const DashboardLayout = () => {
  const { data: tasks, isLoading, error } = useSWR<TaskPropsResponse>("/tasks");

  if (isLoading) {
    ToastNotification("Loading");
  }

  if (error) {
    ToastNotification("An error occurred");
  }

  return (
    <UserTasks.Provider value={{ tasks, isLoading, error }}>
      <Stack screenOptions={{ headerShown: false }}>
        <StatusBar style="dark" />
        <Stack.Screen name="index" />
        <Stack.Screen name="addTodo" />
        <Stack.Screen name="notification" />
        <Stack.Screen name="profile" />
      </Stack>
    </UserTasks.Provider>
  );
};

export default DashboardLayout;
