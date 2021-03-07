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

### Setting up linting / formatting:

#### THIS IS AN ABSOLUTE NIGHTMARE!!!!!!

STEPS TO FOLLOW:

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
