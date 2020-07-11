import { login } from "@Store/auth/actions";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import styles from "./styles";

const Login: () => JSX.Element = () => {
  const handleLogin = () => {
    login({
      username: "johndoe",
      password: "secretPassword",
    });
  };
  return (
    <View style={styles.container}>
      <Button
        icon="logout"
        mode="outlined"
        onPress={handleLogin}
        accessibilityStates="">
        Login
      </Button>
    </View>
  );
};

export default Login;
