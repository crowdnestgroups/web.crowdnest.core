import { useMutation } from "@tanstack/react-query";

import https from "@/lib/axios";

export const useLoginMutation = () => {
  const result = useMutation<IServerResponse<{ accessToken: string }>, Error, { email: string, password: string }>({
    mutationFn: async (data) => {
      const response = await https.post("/auth/sign-in", data);
      return response.data;
    },
  });
  return result;
};

export const useSignUpMutation = () => {
  const result = useMutation<IServerResponse, Error, { email: string, password: string }>({
    mutationFn: async (data) => {
      const response = await https.post("/auth/sign-up", data);
      return response.data;
    },
  });
  return result;
};

export const useVerifySignupMutation = () => {
  const result = useMutation<IServerResponse<{ accessToken: string }>, Error, { email: string, otp: string }>({
    mutationFn: async (data) => {
      const response = await https.post("/auth/verify-email-otp", data);
      return response.data;
    },
  });
  return result;
};

export const useVerifyLoginMutation = () => {
  const result = useMutation<IServerResponse<{ accessToken: string, user: IUser }>, Error, { otp: string }>({
    mutationFn: async (data) => {
      const response = await https.post("/auth/verify-email-otp", data);
      return response.data;
    },
  });
  return result;
};

export const useOnboardMutation = () => {
  const result = useMutation<IServerResponse<{
    accessToken: string,
    user: IUser
  }>, Error, { password: string, first_name: string, last_name: string, phone_number: string, gender: string, date_of_birth: string }>({
    mutationFn: async (data) => {
      const response = await https.post("/auth/onboard-user", data);
      return response.data;
    },
  });
  return result;
}

export interface IUser {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  gender: string,
  date_of_birth: string,
  phone_verified_at: string | null,
  is_onboarded: boolean
}