import {
  Auth,
  AuthActionTypes,
  USER_LOGIN_FAIL,
  USER_LOGIN_INIT,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./type";

export const initialState: Auth = {
  loginSuccess: false,
  role: null,
  userId: "",
  phoneNumber: "",
  email: "",
  name: "",
  avatar: "",
};

export default (state = initialState, action: AuthActionTypes): any => {
  switch (action.type) {
    case USER_LOGIN_INIT: {
      return Object.assign({}, state, initialState);
    }

    case USER_LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        loginSuccess: true,
        // role: auth.getUserRole,
        // userId: auth.getUserId,
        // phoneNumber: auth.getUserPhoneNumber,
        // email: auth.getUserEmail,
      });
    }

    case USER_LOGIN_FAIL: {
      return Object.assign({}, state, {
        loginSuccess: initialState.loginSuccess,
      });
    }

    case USER_LOGOUT: {
      return Object.assign({}, state, initialState);
    }

    default:
      return state;
  }
};
