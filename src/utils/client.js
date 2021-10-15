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

    if (userReducer?.accessToken) {
      headerParams.Authorization = `Bearer ${userReducer?.accessToken}`;
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
  let payloadData = config.payload;

  if (!url) {
    errors.push("url");
  }

  if (!config.payload && config.method !== "GET" && config.method !== "DELETE") {
    errors.push("payload");
  }

  if (config.method === "POST") {
    let form_data = new FormData();

    for (let key in payloadData) {
      form_data.append(key, payloadData[key]);
    }

    payloadData = form_data;
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join("`, `")}\``);
  }

  const params = {
    ...config.headers,
    method: config.method,
    params: config.params,
    data: payloadData,
    timeout: 3000,
  };

  return axios({
    url: /^(https?:\/\/)/.test(url) ? url : `${BASE_URL}${url}`,
    ...params,
  })
    .then((response) => {
      if (response.status >= 400) {
        throw response.data;
      }
      return response.data;
    })
    .catch((err) => {
      console.log(`Error while ${url}`, err);
      throw err;
    });
}
