import axios, { AxiosInstance } from "axios";
import { deleteCookie, getCookie } from "./cookies";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

interface DecodedToken {
  exp: number;
}

// Function to check if the token is expired
async function isTokenExpired(): Promise<boolean> {
  const token = await getCookie(process.env.NEXT_PUBLIC_SESSION_KEY!);
  if (!token) return false;

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Invalid token:", error);
    return true;
  }
}

export async function logoutUser() {
  await Promise.all([
    deleteCookie(process.env.NEXT_PUBLIC_SESSION_KEY!),
    deleteCookie(process.env.NEXT_PUBLIC_ID_KEY!),
  ]).then(() => {
    redirect("/sign-in");
  });
}

// Create a base Axios instance
const createBaseAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
  });

  instance.interceptors.request.use(
    async (config) => {
      const token = await getCookie(process.env.NEXT_PUBLIC_SESSION_KEY!);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) =>
      Promise.reject(
        new Error(
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        ),
      ),
  );

  instance.interceptors.response.use(
    (response) => response, // Pass successful responses unchanged
    (error) => {
      const { response } = error;

      // Default error message
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (response) {
        // Extract message if available
        errorMessage = response.data.message || errorMessage;
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Request timed out. Please try again.";
      }

      return Promise.reject(new Error(errorMessage));
    },
  );

  return instance;
};

const createRequireAuthAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
  });

  // Request interceptor (checks token expiration)
  instance.interceptors.request.use(
    async (config) => {
      if (await isTokenExpired()) {
        await logoutUser();
        return Promise.reject(
          new Error("Session expired. Please sign in again."),
        );
      }

      const token = await getCookie(process.env.NEXT_PUBLIC_SESSION_KEY!);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) =>
      Promise.reject(
        new Error(
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        ),
      ),
  );

  instance.interceptors.response.use(
    (response) => response, // Pass successful responses unchanged
    (error) => {
      const { response } = error;
      // Default error message
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (response) {
        // Extract message if available
        errorMessage = response.data.message || errorMessage;
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Request timed out. Please try again.";
      }

      return Promise.reject(new Error(errorMessage));
    },
  );

  return instance;
};

const https = createBaseAxiosInstance(process.env.NEXT_PUBLIC_API_URL!);
export const protectedService = createRequireAuthAxiosInstance(
  process.env.NEXT_PUBLIC_API_URL!,
);

export default https;
