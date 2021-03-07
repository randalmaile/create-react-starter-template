# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Dependencies you should have in your package.json file:
 "dependencies": {
    "axios": "^0.19.1",
    "date-fns": "^1.30.1",
    "prop-types": "^15.7.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "^3.3.0",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "reselect": "^4.0.0"
  },

### Setting STYLING FOR YOUR PROJECT

npm install --save styled-components

### Setting up linting / formatting:

TAMING THE NIGHTMARE - STEPS TO FOLLOW:

1. Go to: https://eslint.org/docs/user-guide/getting-started
2. Run npx eslint --init (go through the prompts and accept all the defaults - choose .js for config file) - remove the .js extension and the "module.exports ="
3. eslint plugins:
   a. eslint-plugin-react: https://github.com/yannickcr/eslint-plugin-react#configuration
4. Install eslint-plugin-prettier (https://github.com/prettier/eslint-plugin-prettier)
5. Install eslint-config-prettier (https://github.com/prettier/eslint-config-prettier#installation):  
   If you use ESLint, install eslint-config-prettier to make ESLint and Prettier play nice with each other. It turns off all ESLint rules that are unnecessary or might conflict with Prettier.
   a. Follow the config rules here: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
6. Install Prettier: https://prettier.io/docs/en/install.html
   a. npm install --save-dev --save-exact prettier
   b. prettier --write . to format the entire project
7. Install Prettier - Code formatter (VS Code extenstions)
   a. 1. CMD + Shift + P -> Format Document
   OR 1. Select the text you want to Prettify 2. CMD + Shift + P -> Format Selection

8. Install lint-staged and husky: https://github.com/okonet/lint-staged && https://github.com/typicode/husky
   Note: If you use ESLint, make sure lint-staged runs it before Prettier, not after.

9. IMPORTANT: Note: While it is possible to pass options to Prettier via your ESLint configuration file, it is not recommended because editor extensions such as PRETTIER-VSCODE will read .prettierrc, but won't read settings from ESLint, which can lead to an inconsistent experience.

Extra plugins used in this starter setup:
10. eslint-plugin-import(https://github.com/benmosher/eslint-plugin-import)
  a. Config: "extends": ["eslint:recommended","plugin:import/errors","plugin:import/warnings"]
11. eslint-config-airbnb(https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb): Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires eslint, eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y.
  a. Run the following command: npm info "eslint-config-airbnb@latest" peerDependencies; this will list your peer dependencies - update according to the listed versions and then run npm install eslint-config-airbnb --save-dev
  b. make sure to run npm install afterwards to lock in the versions
  c. Add "extends": "airbnb" to your .eslintrc
12. eslint-plugin-react-hooks(https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks#eslint-plugin-react-hooks)
  a. Config: "extends": ["plugin:react-hooks/recommended"]
13. eslint-plugin-jsx-a11y(https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
  a. Config:
      "plugins": ["jsx-a11y"],
      "extends": ["plugin:jsx-a11y/recommended"]
14. eslint-plugin-jest(https://github.com/jest-community/eslint-plugin-jest)
  a. config:  "extends": ["plugin:jest/all"]
15. eslint-plugin-react-redux(https://github.com/DianaSuvorova/eslint-plugin-react-redux)
  a. Config: 
    "plugins": ["react-redux"],
    "extends": ["plugin:react-redux/recommended"]
