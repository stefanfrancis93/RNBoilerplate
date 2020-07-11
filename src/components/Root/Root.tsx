import { logout } from "@Store/auth/actions";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import styles from "./styles";

const App = () => {
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

export default App;
