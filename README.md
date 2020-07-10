# 🚀 RNBoilerplate - July 2020

[![React Native](https://img.shields.io/badge/React%20Native-v0.63.0-green.svg)](https://facebook.github.io/react-native/)
[![React Navigation V5](https://img.shields.io/badge/React-v16.13.1-blue.svg)](https://reactjs.org)

React Native Boilerplate is a starting point for React Native application. This project is configured with redux.

<p float="left">
<a href='http://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>

<a href='https://callstack.github.io/react-native-paper/'><img src='https://raw.githubusercontent.com/callstack/react-native-paper/master/docs/assets/images/paper-logo.svg?sanitize=true' height='110' alt='Redux Logo' aria-label='https://callstack.github.io/react-native-paper/' /></a>

</p>

## Features

- **[TypeScript](https://www.typescriptlang.org/)** to ensure the highest code quality
- **[React](https://reactjs.org/)** to describe interface components
- **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** to ensure that source files are error-free and easy to read
- **[React Native Paper](https://callstack.github.io/react-native-paper/)** - for theming support
- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)**
- **[Redux](http://redux.js.org/)** with [hooks](https://react-redux.js.org/api/hooks) support

## Project structure

Created with the `create-react-native-app`. The source code is stored in `src` subdirectory.

## Running a local copy

1.  Ensure you have the latest git, Node.js and Yarn installed on your machine

    ```bash
    node --version
    ## ≥ 12.0

    yarn --version
    ## ≥ 1.22
    ```

1.  Clone the repo from GitLab

    ```bash
    cd PATH/TO/MISC/PROJECTS
    git clone git@github.com:stefanfrancis93/RNBoilerplate.git <your project name>
    cd RNBoilerplate
    ```

1.  Remove `.git` folder, `rm -rf .git`

1.  Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name `$ npx react-native-rename <newName>`

1.  Install npm dependencies using Yarn from the root directory

    ```bash
    yarn
    ```

1.  Start the metro bundler

    ```bash
    yarn start
    ```

    Modifying any of the files will refresh the app, thanks to React.js hot module reloading.
    To stop running the server, press `ctrl+c`.

1.  Run the test application:

    - On Android:
      - Run `react-native run-android` or Use Android Studio (Recommended)
    - On iOS:
      - Open `ios/YourProjectName.xcworkspace` in Xcode
      - Hit `Run` after selecting the desired device

1.  If you want to test a production build, generate an APK like this:

    ```bash
    yarn build:android
    ```

## Contributing

PRs are welcome
