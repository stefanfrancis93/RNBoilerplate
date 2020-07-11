// Actions
export const USER_LOGIN_INIT = "USER:LOGIN:INIT";
export const USER_LOGIN_SUCCESS = "USER:LOGIN:SUCCESS";
export const USER_LOGIN_FAIL = "USER:LOGIN:FAIL";
export const USER_LOGOUT = "USER:LOGOUT";

// State
export interface Auth {
  loginSuccess: boolean;
  role: null;
  userId: string;
  phoneNumber: string;
  email: string;
  name: string;
  avatar: string;
}

// Action Interface
interface UserLoginInitAction {
  type: typeof USER_LOGIN_INIT;
  payload: Auth;
}

interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: Auth;
}

interface UserLoginFailAction {
  type: typeof USER_LOGIN_FAIL;
  payload: Auth;
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT;
  payload: Auth;
}

export type AuthActionTypes =
  | UserLoginInitAction
  | UserLoginSuccessAction
  | UserLoginFailAction
  | UserLogoutAction;
