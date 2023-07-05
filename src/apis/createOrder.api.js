import { FULL_BASE_URL_ORDER } from "@/src/constant/server";
import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  accept: "*/*",
};

export const createOrder = (phoneNumber, note, deadline, items) => {
  return axios.post(
    `${FULL_BASE_URL_ORDER}create-orders`,
    { phoneNumber, note, deadline, items },
    {
      headers: headers,
    }
  );
};
