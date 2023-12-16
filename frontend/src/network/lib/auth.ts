import { TUser } from "@src/types/user";
import axiosClient from "@src/network/apiClient";
import endpoints from "@src/network/lib/endpoints";
import { AxiosResponse } from "axios";

type TSignUpData = { message: string; token: string };

type TSignUpResponse = Promise<TSignUpData>;

export const signUp = async (user: TUser): TSignUpResponse => {
  const res: AxiosResponse<TSignUpData> = await axiosClient.post(
    endpoints.SIGNUP,
    user
  );
  return res.data;
};
