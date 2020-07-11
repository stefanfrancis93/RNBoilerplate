import * as React from "react";

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef: React.Ref<any> = React.createRef();

const navigate: (name: string, params: any) => void = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

const goBack: () => void = () => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};

export default {
  navigate,
  goBack,
};
