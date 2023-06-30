import { FULL_BASE_URL, FULL_BASE_URL_INFO } from "@/constant/server";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  accept: "*/*",
};

export const loginApi = (phoneNumber, password) => {
  return axios.post(
    `${FULL_BASE_URL}log-in`,
    {
      phoneNumber,
      password,
    },
    {
      headers: headers,
    }
  );
};

export const getInfoUser = (token) => {
  return axios.get(`${FULL_BASE_URL_INFO}me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
