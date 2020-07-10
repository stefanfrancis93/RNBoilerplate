import { USER_LOGOUT } from 'store/auth/type';
import store from 'store/configureStore';

export const logout: () => void = () => {
  const { dispatch } = store();
  dispatch({ type: USER_LOGOUT });
};
