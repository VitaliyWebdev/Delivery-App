import { SecureStorageKeys } from "@constants/enums";
import * as SecureStore from "expo-secure-store";

type TUserBody = {
  token: string;
};

export const storeUserSession = async (
  userBody: TUserBody,
  key: SecureStorageKeys
) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(userBody));
    return userBody;
  } catch (error) {
    // There was an error on the native side
    console.log("Error:", error);
  }
};

export const retrieveUserSession = async (key: SecureStorageKeys) => {
  try {
    const session = await SecureStore.getItemAsync(key);

    if (session !== null) {
      return JSON.parse(session);
    }
  } catch (error) {
    // There was an error on the native side
    console.log("Error:", error);
  }
};

export const clearUserSession = async (key: SecureStorageKeys) => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    // There was an error on the native side
    console.log("Error:", error);
  }
};