import Navigator from "@Navigation/NavigationStack";
import configureStore from "@Store/configureStore";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";

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
