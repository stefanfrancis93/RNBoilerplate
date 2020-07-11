import App from "@Components/Root";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});
