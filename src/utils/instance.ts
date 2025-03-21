import { ACCESS_TOKEN } from "@/constants";
import { BASE_URL } from "@/constants";
import axios from "axios";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
