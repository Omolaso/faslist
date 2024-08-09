import * as SecureStore from "expo-secure-store";

export const saveKey = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

export const getValueFor = async (key: string) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    return "";
  }
};

export const deleteKey = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};
