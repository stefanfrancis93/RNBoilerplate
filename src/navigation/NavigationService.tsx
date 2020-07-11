import * as React from "react";

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef: React.Ref<any> = React.createRef();

const navigate = (name: string, params: any) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

const goBack = () => {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
};

export default {
  navigate,
  goBack,
};
