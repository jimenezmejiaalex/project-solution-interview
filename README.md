This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Changes by Alexander Jimenez Mejia

NOTE: In order to run correctly this project you should have Node 14

I have updated the structure of the folders on the src by type so each of these folders represents the type of files so they are grouped to make more sense in the project, also each of the component in side the component folder have their own scss and tsx in each folder.

I have modified the tsconfig for using absolute paths.

I have created two new components (ErrorMessage, FileInput), ErrorMessage will be useful when you have to show a message, it is using the message from the app state, you can change it any time you need, FileInput will give the change to the user to upload a file, then the user can fetch it, and finally I will send it to the parent component with an onChange function.

Also I have added the functionally in the body to parse the current file and update the current BinTreeNode to show it in the treeInput component, then I have made some changes in the treeInput to take the changes that the user can make and update the current state and it will update the output.

Finally I just made some changes in the UI to make it look better and show the tree as it is.

## Info about the problems
### Problem #1: 
I have created a utils file called binTreeUtils.ts in the utils folder, you will see a function called getBinTreeNode that is the solution function for this problem.

### Problem #2 and Problem #3
In the next section you will see the steps for these problems

## Steps
1. Go and select a file
2. Click the fetch button (after this, it will show the Tree in the output area)
3. Make the changes you need in the Tree text area
4. Click the process
5. See the changes made in the output area
