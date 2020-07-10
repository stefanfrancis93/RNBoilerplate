import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { logout } from 'store/auth/actions';

import styles from './styles';

const Login: () => JSX.Element = () => {
  return (
    <View style={styles.container}>
      <Button
        icon="logout"
        mode="outlined"
        onPress={logout}
        accessibilityStates="">
        Logout
      </Button>
    </View>
  );
};

export default Login;
