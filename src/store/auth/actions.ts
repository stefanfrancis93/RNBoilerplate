import {
  USER_LOGIN_FAIL,
  USER_LOGIN_INIT,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "@Store/auth/type";
import apiCall from "@Store/config/api";
import { API_END_POINTS } from "@Store/config/constants";
import store from "@Store/configureStore";
import { API_METHODS } from "utils/constants";

export const logout: () => void = () => {
  const { dispatch } = store();
  dispatch({ type: USER_LOGOUT });
};

export const login: (data: {
  username: string;
  password: string;
}) => void = async (data: { username: string; password: string }) => {
  const { LOGIN } = API_END_POINTS;
  const options = {
    url: LOGIN,
    data,
    method: API_METHODS.POST,
    TYPES: {
      requestType: USER_LOGIN_INIT,
      successType: USER_LOGIN_SUCCESS,
      failureType: USER_LOGIN_FAIL,
    },
  };

  const response = await apiCall(options);
  return response;
};
