import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';

const App: () => JSX.Element = () => {
  const onLogout = () => {
    console.log("Logout");
  };

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout} accessibilityStates="">
        Logout
      </Button>
    </View>
  );
}

export default App;
