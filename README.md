# Movies App

App to show movies' information

# About

This project was made with React Native and Javascript.
Commits are done with the help of [git-cz](https://github.com/streamich/git-cz) and [commitlint](https://github.com/conventional-changelog/commitlint)

There are hooks in place for running tests and linter previous to commit with help of [husky v5](https://github.com/typicode/husky)

# Running locally

1. Configure [React Native](https://reactnative.dev/docs/environment-setup) on your local machine.
2. Run `yarn install`
3. Run `npx pod-install ios` to install iOS dependencies
4. Run local server needed for the app to request movies information. If you have not already clone that project you can find it [here](https://github.com/cedancp/movies-backend)
5. Configure local server ip on [configuration constants](src/config/constants.js) (baseUrl)
6. And finally run `npx react-native run-ios` to start iOS or `npx react-native run-android` to start Android

# Testing

Run `npm test` to run tests




