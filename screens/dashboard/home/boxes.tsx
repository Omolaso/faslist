import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

interface BoxProps {
  title: string;
  content: string;
}

const boxArray: BoxProps[] = [
  { title: "Weekly Streak", content: "55%" },
  { title: "Quick Finisher", content: "85%" },
  { title: "Priority Task", content: "55%" },
];

const BoxRenderItem = (prop: BoxProps) => {
  return (
    <View style={styles.boxStyle}>
      <ThemedText type="default" style={{ textAlign: "center" }}>
        {prop.title}
      </ThemedText>
      <ThemedText type="link" style={{ fontWeight: 500 }}>
        {prop.content}
      </ThemedText>
    </View>
  );
};

const Boxes = () => {
  return (
    <View style={styles.boxesContainer}>
      <FlatList
        horizontal
        data={boxArray}
        renderItem={({ item, index }) => (
          <BoxRenderItem title={item.title} content={item.content} />
        )}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.listContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxesContainer: {
    width: "100%",
    maxWidth: "80%",
    marginHorizontal: "auto",
  },
  boxStyle: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    backgroundColor: Colors.faslist.white,
    padding: 4,
    width: 80,
    borderRadius: 10,
  },
  listContainerStyle: {
    width: "100%",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 5,
  },
});

export default Boxes;
