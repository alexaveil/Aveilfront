// @flow
/**
 * Client
 * @module Client
 */
import axios from "axios";

import { store } from "../store";
import { BASE_URL } from "../constants/config";

axios.interceptors.request.use(
  (config) => {
    const { userReducer } = store.getState();
    const headerParams = {};

    if (userReducer?.access_token) {
      headerParams.Authorization = `Bearer ${userReducer?.access_token}`;
    }

    config.headers = {
      ...headerParams,
      "Content-Type": "application/json",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function request(url, options = {}) {
  const config = {
    method: "GET",
    ...options,
  };
  const errors = [];

  if (!url) {
    errors.push("url");
  }

  if (
    !config.payload &&
    config.method !== "GET" &&
    config.method !== "DELETE"
  ) {
    errors.push("payload");
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join("`, `")}\``);
  }

  const params = {
    ...config.headers,
    method: config.method,
    params: config.params,
    data: config.payload,
    withCredentials: true,
    timeout: 3000,
  };

  return axios({
    url: /^(https?:\/\/)/.test(url) ? url : `${BASE_URL}${url}`,
    ...params,
  })
    .then(async (response) => {
      if (response.status >= 400) {
        throw response.data;
      }
      return response.data;
    })
    .catch(async (err) => {
      console.log(`Error while ${url}`, err);
      throw err;
    });
}
