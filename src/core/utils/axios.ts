import axios from "axios";

export const apiV2 = axios.create({
  baseURL:
    "https://stage-api.sanaap.co/api/v2/app/DEY/agent/verification/signup",
});

export const apiBase = axios.create({
  baseURL: "https://stage-api.sanaap.co/base",
});
