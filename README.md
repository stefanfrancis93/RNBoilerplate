# RNBoilerplate

## Key ingredients

- **[TypeScript](https://www.typescriptlang.org/)** to ensure the highest code quality
- **[React](https://reactjs.org/)** to describe interface components
- **[ESLint](https://eslint.org/)** and **[Prettier](https://prettier.io/)** to ensure that source files are error-free and easy to read

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

1.  Install npm dependencies using Yarn

    ```bash
    yarn
    ```

1.  Start the metro bundler

    ```bash
    yarn start
    ```

    Modifying any of the files will refresh the app, thanks to React.js hot module reloading.
    To stop running the server, press `ctrl+c`.

1.  If you want to test a production build, generate an APK like this:

    ```bash
    yarn build:android
    ```
