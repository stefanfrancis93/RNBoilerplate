import Navigator from 'navigation';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const App: () => JSX.Element = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator />
      </PaperProvider>
    </Provider>
  );
};

export default App;
