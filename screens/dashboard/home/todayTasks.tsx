import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemedText } from "@/components/ThemedText";
import { TaskProps } from "@/types/tasks";
import { Colors } from "@/constants/Colors";
import DashboardHomeHeroSection from "./hero";
import Activities from "./activities";
import NavigationTabs from "@/components/Tabs";

const tasksArray: TaskProps[] = [
  {
    title: "TestTaskTitle1",
    subtitle: "TestTaskSubtitle",
    priority: "High",
    time: "12:15PM",
  },
  {
    title: "TestTaskTitle2",
    subtitle: "TestTaskSubtitle",
    priority: "High",
    time: "12:15PM",
  },
  {
    title: "TestTaskTitle3",
    subtitle: "TestTaskSubtitle",
    priority: "High",
    time: "12:15PM",
  },
  {
    title: "TestTaskTitle4",
    subtitle: "TestTaskSubtitle",
    priority: "High",
    time: "12:15PM",
  },
  {
    title: "TestTaskTitle5",
    subtitle: "TestTaskSubtitle",
    priority: "High",
    time: "12:15PM",
  },
];

const TaskRenderItem = (props: TaskProps) => {
  return (
    <View style={styles.renderItemWrapper}>
      <View style={{ gap: 5 }}>
        <ThemedText type="title" style={{ fontSize: 20 }}>
          {props.title}
        </ThemedText>
        <ThemedText
          type="default"
          style={{ fontWeight: 400, color: Colors.faslist.gray }}
        >
          {props.subtitle}
        </ThemedText>
      </View>

      <View style={{ flexDirection: "row", gap: 4, alignItems: "flex-end" }}>
        <Feather
          name="clock"
          size={18}
          color={Colors.faslist.gray}
          style={{ marginBottom: 3 }}
        />

        <View style={{ gap: 5 }}>
          <ThemedText type="default" style={{ fontWeight: 400 }}>
            Priority:{" "}
            <ThemedText style={{ fontWeight: 600 }}>
              {props.priority}
            </ThemedText>
          </ThemedText>

          <ThemedText type="default" style={{ fontWeight: 400 }}>
            Start by:{" "}
            <ThemedText style={{ fontWeight: 600 }}>{props.time}</ThemedText>
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

const TodayTasks = () => {
  return (
    <>
      <FlatList
        data={tasksArray}
        renderItem={({ item }) => (
          <TaskRenderItem
            title={item.title}
            subtitle={item.subtitle}
            priority={item.priority}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ gap: 10 }}
        ListEmptyComponent={<ThemedText>Empty</ThemedText>}
        ListHeaderComponent={
          <>
            <View style={{ gap: 20, marginBottom: 20 }}>
              <DashboardHomeHeroSection />
              <Activities />
            </View>

            <ThemedText type="title" style={{ fontWeight: "400" }}>
              Today's Tasks
            </ThemedText>
          </>
        }
      />
      <NavigationTabs />
    </>
  );
};

const styles = StyleSheet.create({
  renderItemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    minHeight: 100,
    borderRadius: 16,
    backgroundColor: Colors.faslist.gradientLight,
  },
});

export default TodayTasks;
