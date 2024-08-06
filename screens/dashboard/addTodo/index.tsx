import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  TextInput,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
} from "react-native";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons/";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { CreateTaskProps } from "@/types/tasks";
import CustomSafeAreaView from "@/components/CustomSafeAreaView";
import CustomTextInput from "@/components/CustomTextInput";
import CustomButton from "@/components/CustomButton";
import InputFieldContainer from "./inputContainer";

const priorityTasks: string[] = ["Low", "Medium", "High"];

const AddTodoPage = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState<boolean>(false);
  const [isChecked, setChecked] = useState<boolean>(false);
  const priorityLevelRef = useRef<Text | null>(null);
  // console.log(priorityLevelRef.current);

  const onChange = (event: DateTimePickerEvent, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskProps>();

  const CreateTask: SubmitHandler<CreateTaskProps> = (data) => {
    Keyboard.dismiss();
    console.log(data);
    reset();
  };

  return (
    <CustomSafeAreaView style={{ backgroundColor: Colors.faslist.white }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, gap: 20 }}>
            <View style={styles.headerWrapper}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
              >
                <Ionicons
                  name="arrow-back-outline"
                  size={20}
                  color={Colors.faslist.black}
                />
              </TouchableOpacity>
              <ThemedText
                type="default"
                style={{ margin: "auto", fontWeight: 600 }}
              >
                Create New Task
              </ThemedText>
            </View>

            <View style={styles.formContainer}>
              <View style={{ gap: 8 }}>
                <ThemedText type="title">Schedule</ThemedText>

                <InputFieldContainer>
                  <View style={styles.inputContainer}>
                    <Controller
                      name="name"
                      control={control}
                      rules={{
                        required: true,
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <CustomTextInput
                          textValue={value}
                          keyboardType={"default"}
                          onBlur={onBlur}
                          onChange={onChange}
                          placeholder={"Task Name"}
                        />
                      )}
                    />
                  </View>
                  {errors.name && (
                    <ThemedText type="danger">Task name is required</ThemedText>
                  )}
                </InputFieldContainer>

                <InputFieldContainer>
                  <Controller
                    name="description"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        value={value}
                        keyboardType={"default"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        multiline
                        numberOfLines={5}
                        placeholder={"Task Description"}
                        placeholderTextColor={Colors.faslist.gray}
                        style={[
                          styles.inputContainer,
                          {
                            height: 150,
                            color: Colors.faslist.black,
                            textAlignVertical: "top",
                            paddingVertical: 10
                          },
                        ]}
                      />
                    )}
                  />
                  {errors.description && (
                    <ThemedText type="danger">
                      Task description is required
                    </ThemedText>
                  )}
                </InputFieldContainer>
              </View>

              <View style={{ gap: 8 }}>
                <ThemedText type="title">Priority</ThemedText>

                <FlatList
                  horizontal
                  data={priorityTasks}
                  renderItem={({ item }) => (
                    <TouchableOpacity style={styles.priorityContent}>
                      <Text ref={priorityLevelRef}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                  contentContainerStyle={styles.priorityContentContainer}
                />
              </View>

              <View style={{ gap: 8 }}>
                <ThemedText type="title">Set Reminder</ThemedText>
                {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
                {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}

                {/* <Text>selected: {date.toLocaleString()}</Text> */}
                {/* {show && ( */}
                {/* <DateTimePicker
            testID="dateTimePicker"
            value={date}
            // mode={mode}
            is24Hour={true}
            onChange={onChange}
          /> */}
                {/* )} */}
              </View>

              <View style={{ gap: 8 }}>
                <ThemedText type="title">Reminder Type</ThemedText>

                <View style={{ flexDirection: "row", gap: 40 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? Colors.faslist.blue : undefined}
                    />
                    <Pressable onPress={() => setChecked(!isChecked)}>
                      <ThemedText>Email</ThemedText>
                    </Pressable>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 4,
                      alignItems: "center",
                    }}
                  >
                    <Checkbox value={true} disabled />
                    <ThemedText>App Reminder</ThemedText>
                  </View>
                </View>
              </View>

              <CustomButton
                textValue={"Create Todo"}
                clickFunction={handleSubmit(CreateTask)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.faslist.lightGray,
  },
  formContainer: {
    // justifyContent: "space-between",
    flex: 1,
    gap: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.faslist.gray,
    borderRadius: 10,
    height: 56,
    paddingHorizontal: 10,
  },
  priorityContentContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  priorityContent: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.faslist.gray,
    width: 103,
  },
});

export default AddTodoPage;
