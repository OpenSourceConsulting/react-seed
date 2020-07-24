This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yo rogen:module moduleName [options]`

Generate redux module( reducer, saga, hooks )

options:
  -s,   --single         # Whether generate a single object module.   Default: false

### `yo rogen:persist persistModuleName [options]`

Generate redux persist module( reducer, saga, hooks )

options:
  -s,   --single         # Whether generate a single object persist module.  Default: false

### `yo rogen:component componentName [options]`

Generate react component

options:
  -p,   --parent         # Generate in parent component(directory).
  -o,   --only-file      # Whether generate a page file only in the parent directory. (This works only when provided -p option.)  Default: false

### `yo rogen:page pageName [options]`

Generate page

options:
  -p,   --parent         # Generate in parent page(directory).
  -r,   --with-route     # Whether generate `*.route` file.                                                                       Default: false
  -o,   --only-file      # Whether generate a page file only in the parent directory. (This works only when provided -p option.)  Default: false
