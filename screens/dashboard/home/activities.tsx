import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontAwesome, AntDesign, SimpleLineIcons } from "@expo/vector-icons/";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

type IconTypes =
  | keyof typeof FontAwesome.glyphMap
  | keyof typeof AntDesign.glyphMap
  | keyof typeof SimpleLineIcons.glyphMap;

interface ActivitiesProps {
  name: string;
  iconName?: IconTypes;
  image: ImageSourcePropType | undefined;
  index?: number;
}

const activitiesArray: ActivitiesProps[] = [
  {
    name: "To Do",
    iconName: "tasks",
    image: require("@/assets/images/todo.png"),
  },
  {
    name: "Gamification",
    iconName: "badge",
    image: require("@/assets/images/badge.png"),
  },
  {
    name: "Calender",
    iconName: "calendar",
    image: require("@/assets/images/calendar.png"),
  },
];

const ActivityRenderItem = (itemProps: ActivitiesProps) => {
  return (
    <View style={styles.activityItem}>
      <View style={styles.iconBackground}>
        <Image source={itemProps.image} style={{ width: 24, height: 24 }} />
      </View>
      <ThemedText style={{ fontSize: 18, fontWeight: "500" }}>
        {itemProps.name}
      </ThemedText>
    </View>
  );
};

const Activities = () => {
  return (
    <View style={styles.activityContainer}>
      <FlatList
        horizontal
        data={activitiesArray}
        renderItem={({ item, index }) => (
          <ActivityRenderItem
            name={item.name}
            iconName={item.iconName}
            image={item.image}
            index={index}
          />
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.activityItemWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
  },
  activityItemWrapper: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  activityItem: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: Colors.faslist.lightGray,
    padding: 6,
    minWidth: "25%",
    minHeight: 150,
    borderRadius: 35,
  },
  iconBackground: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.faslist.gradientDark,
  },
});

export default Activities;
