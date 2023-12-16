import { SecureStorageKeys } from "@constants/enums";
import { retrieveUserSession } from "@src/utils/encryptedStorage";
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface UserContextProps {
  userToken: string | null;
  setUserToken: Dispatch<SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);
type TUserProvider = {
  children: ReactNode;
};
export const UserProvider: FC<TUserProvider> = ({ children }) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const getUserSession = async () => {
      const userSession = await retrieveUserSession(
        SecureStorageKeys.USER_SESSION
      );
      const token = userSession?.token;
      if (token) {
        setUserToken(token);
      }
    };

    getUserSession();
  }, []);

  return (
    <UserContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </UserContext.Provider>
  );
};
